using Finances.Domain.Categories;
using Finances.Domain.Transactions;

namespace Finances_Backend.Categories;

public record CreateCategoryRequest(string Name, int IconId, string ColorHex, Guid UserId,
    TransactionType TransactionType, CategoryType Type);