using Finances.Application.Common.Abstractions;
using Finances.Domain.Categories;
using MediatR;

namespace Finances.Application.Categories.CreateCategory;

internal class CreateCategoryCommandHandler(ICategoryRepository categoryRepository) : 
    IRequestHandler<CreateCategoryCommand, Guid>
{
    public async Task<Guid> Handle(CreateCategoryCommand request, CancellationToken cancellationToken)
    {
        var category = Category.CreateNew(request.Name, request.IconId, request.ColorHex, request.UserId,
            request.TransactionType, request.Type);
        categoryRepository.Add(category);
        await categoryRepository.UnitOfWork.CommitAsync(cancellationToken);
        return category.Id;
    }
}