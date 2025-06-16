using Finances.Application.Categories.CreateCategory;
using Finances.Application.Categories.DeleteCategory;
using Finances.Application.Categories.GetAllCategories;
using Finances.Application.Categories.GetByIdCategory;
using Finances.Application.Categories.UpdateCategory;
using Finances.Domain.Transactions;
using MediatR;

namespace Finances_Backend.Categories;

public static class CategoryApi
{
    public static void RegisterCategoryApi(this WebApplication app)
    {
        app.MapPost("/categories", async (CreateCategoryRequest request, IMediator mediator) =>
        {
            var command = new CreateCategoryCommand(request.Name, request.IconId, request.ColorHex, request.UserId, 
                request.TransactionType, request.Type);

            var newCategoryId = await mediator.Send(command);
            return TypedResults.Created($"/categories/{newCategoryId}", newCategoryId);

        }).RequireAuthorization().WithName("CreateCategory").WithTags("Categories");
        
        app.MapDelete("/categories/{id}", async (Guid id, IMediator mediator) =>
        {
            var command = new DeleteCategoryCommand(id);
            var isDeleted = await mediator.Send(command);

            return TypedResults.Ok(isDeleted);
            
        }).RequireAuthorization().WithName("DeleteCategory").WithTags("Categories");
        
        app.MapGet("/categories", async (Guid? categoryId, TransactionType? transactionType ,IMediator mediator) =>
        {
            var categories = await mediator.Send(new GetAllCategoriesQuery(categoryId, transactionType));
            return TypedResults.Ok(categories);
            
        }).RequireAuthorization().WithName("GetAllCategories").WithTags("Categories");
        
        app.MapGet("/categories/{id}", async (Guid id, IMediator mediator) =>
        {
            var category = await mediator.Send(new GetByIdCategoryQuery(id));
            return TypedResults.Ok(category);
            
        }).RequireAuthorization().WithName("GetByIdCategories").WithTags("Categories");
        
        app.MapPut("/categories/{id}", async (Guid id ,UpdateCategoryRequest request, IMediator mediator) =>
        {
            var command = new UpdateCategoryCommand(id, request.Name, request.IconId, request.ColorHex);
            var categoryId = await mediator.Send(command);
            
            return TypedResults.Accepted($"/categories/{categoryId}", categoryId);

        }).RequireAuthorization().WithName("UpdateCategory").WithTags("Categories");
    }
}