using MediatR;

namespace Finances.Application.Categories.DeleteCategory;

public record DeleteCategoryCommand(Guid CategoryId) : IRequest<bool>;