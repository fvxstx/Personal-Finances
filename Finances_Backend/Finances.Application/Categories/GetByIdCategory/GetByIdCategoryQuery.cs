using Finances.Application.Categories.Dtos;
using MediatR;

namespace Finances.Application.Categories.GetByIdCategory;

public record GetByIdCategoryQuery(Guid categoryId) : IRequest<CategoryResponse>;