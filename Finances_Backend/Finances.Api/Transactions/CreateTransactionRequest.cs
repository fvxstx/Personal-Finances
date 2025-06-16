using Finances.Domain.Transactions;

namespace Finances_Backend.Transactions;

public record CreateTransactionRequest(decimal Amount, Guid AccountId, Guid UserId, Guid CategoryId,
    DateTime ExpiredAt, TransactionType Type, TransactionStatus Status, Guid? AccountDestinationId,
    string? Description);