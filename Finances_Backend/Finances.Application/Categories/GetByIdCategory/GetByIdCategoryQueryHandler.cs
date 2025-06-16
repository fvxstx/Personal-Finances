using Finances.Application.Categories.Dtos;
using Finances.Application.Common.Abstractions;
using MediatR;

namespace Finances.Application.Categories.GetByIdCategory;

internal class GetByIdCategoryQueryHandler(ICategoryRepository categoryRepository) : 
    IRequestHandler<GetByIdCategoryQuery, CategoryResponse>
{
    public async Task<CategoryResponse> Handle(GetByIdCategoryQuery request, CancellationToken cancellationToken)
    {
        var category = await categoryRepository.GetByIdAsync(request.categoryId);
        if (category == null) throw new Exception("Categoria não encontrado");
        
        return await Task.FromResult(new CategoryResponse(category));

    }
}