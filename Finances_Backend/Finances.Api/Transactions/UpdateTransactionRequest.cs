using Finances.Domain.Transactions;

namespace Finances_Backend.Transactions;

public record UpdateTransactionRequest(decimal? Amount, Guid? AccountId, Guid? CategoryId, DateTime? ExpiredAt, 
    TransactionStatus? Status, Guid? AccountDestinationId, string? Description);