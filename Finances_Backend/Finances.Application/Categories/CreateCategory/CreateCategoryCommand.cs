using Finances.Domain.Categories;
using Finances.Domain.Transactions;
using MediatR;

namespace Finances.Application.Categories.CreateCategory;

public record CreateCategoryCommand(string Name, int IconId, string ColorHex, Guid UserId,
    TransactionType TransactionType, CategoryType Type) : IRequest<Guid>;