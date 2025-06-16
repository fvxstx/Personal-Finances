using Finances.Application.Categories.Dtos;
using Finances.Domain.Transactions;
using MediatR;

namespace Finances.Application.Categories.GetAllCategories;

public record GetAllCategoriesQuery(Guid? UserId, TransactionType? TransactionType) : IRequest<IEnumerable<CategoryResponse>>;