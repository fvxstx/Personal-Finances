using Finances.Application.Transactions.CreateTransaction;
using Finances.Application.Transactions.DeleteTransaction;
using Finances.Application.Transactions.GetAllTransactions;
using Finances.Application.Transactions.GetByIdTransaction;
using Finances.Application.Transactions.UpdateTransaction;
using Finances.Domain.Transactions;
using MediatR;

namespace Finances_Backend.Transactions;

public static class TransactionApi
{
    public static void RegisterTransactionApi(this WebApplication app)
    {
        app.MapPost("/transactions", async (CreateTransactionRequest request, IMediator mediator) =>
        {
            var command = new CreateTransactionCommand(request.Amount, request.AccountId, request.UserId, request.CategoryId, 
                request.ExpiredAt, request.Type, request.Status, request.AccountDestinationId, request.Description);

            var newTransactionId = await mediator.Send(command);
            return TypedResults.Created($"/transactions/{newTransactionId}", newTransactionId);

        }).RequireAuthorization().WithName("CreateTransaction").WithTags("Transactions");
        
        app.MapDelete("/transactions/{id}", async (Guid id, IMediator mediator) =>
        {
            var command = new DeleteTransactionCommand(id);
            var isDeleted = await mediator.Send(command);

            return TypedResults.Ok(isDeleted);
            
        }).RequireAuthorization().WithName("DeleteTransaction").WithTags("Transactions");
        
        app.MapGet("/transactions", async (Guid? userId, TransactionType? transactionType ,IMediator mediator) =>
        {
            var transactions = await mediator.Send(new GetAllTransactionsQuery(userId, transactionType));
            return TypedResults.Ok(transactions);
            
        }).RequireAuthorization().WithName("GetAllTransactions").WithTags("Transactions");
        
        app.MapGet("/transactions/{id}", async (Guid id, IMediator mediator) =>
        {
            var transaction = await mediator.Send(new GetByIdTransactionQuery(id));
            return TypedResults.Ok(transaction);
            
        }).RequireAuthorization().WithName("GetByIdTransactions").WithTags("Transactions");
        
        app.MapPut("/transactions/{id}", async (Guid id ,UpdateTransactionRequest request, IMediator mediator) =>
        {
            var command = new UpdateTransactionCommand(id, request.Amount, request.AccountId, request.CategoryId,
                request.ExpiredAt, request.Status, request.AccountDestinationId, request.Description);
            var categoryId = await mediator.Send(command);
            
            return TypedResults.Accepted($"/transactions/{categoryId}", categoryId);

        }).RequireAuthorization().WithName("UpdateTransaction").WithTags("Transactions");
    }
}