using Finances.Application.Common.Abstractions;
using MediatR;

namespace Finances.Application.Categories.UpdateCategory;

internal class UpdateCategoryCommandQuery(ICategoryRepository categoryRepository) : 
    IRequestHandler<UpdateCategoryCommand, Guid>
{
    public async Task<Guid> Handle(UpdateCategoryCommand request, CancellationToken cancellationToken)
    {
        var category = await categoryRepository.GetByIdAsync(request.CategoryId);
        if (category == null) throw new Exception("Conta não encontrada");
        
        category.UpdateCategory(request.Name, request.IconId, request.ColorHex);
        categoryRepository.Update(category);
        await categoryRepository.UnitOfWork.CommitAsync(cancellationToken);
        return category.Id;
    }
}