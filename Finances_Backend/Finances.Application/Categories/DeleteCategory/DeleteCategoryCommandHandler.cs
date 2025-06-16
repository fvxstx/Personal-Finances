using Finances.Application.Common.Abstractions;
using MediatR;

namespace Finances.Application.Categories.DeleteCategory;

internal class DeleteCategoryCommandHandler(ICategoryRepository categoryRepository) : 
    IRequestHandler<DeleteCategoryCommand, bool>
{
    public async Task<bool> Handle(DeleteCategoryCommand request, CancellationToken cancellationToken)
    {
        var category = await categoryRepository.GetByIdAsync(request.CategoryId);
        if (category is null) throw new Exception("Transação nunca encontrada");
        
        categoryRepository.Delete(category);
        await categoryRepository.UnitOfWork.CommitAsync(cancellationToken);
        return true;
    }
}