using MediatR;

namespace Finances.Application.Categories.UpdateCategory;

public record UpdateCategoryCommand(Guid CategoryId, string? Name, int? IconId, string ColorHex) : IRequest<Guid>;