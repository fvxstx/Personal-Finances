using Finances.Application.Categories.Dtos;
using Finances.Application.Common.Abstractions;
using MediatR;

namespace Finances.Application.Categories.GetAllCategories;

internal class GetAllCategoriesQueryHandler(ICategoryRepository categoryRepository) : 
    IRequestHandler<GetAllCategoriesQuery, IEnumerable<CategoryResponse>>
{
    public async Task<IEnumerable<CategoryResponse>> Handle(GetAllCategoriesQuery request, CancellationToken cancellationToken)
    {
        var categories = await categoryRepository.GetAllAsync(request.UserId, request.TransactionType);
        return await Task.FromResult(categories.Select(c => new CategoryResponse(c)).ToList());
    }
}