using Finances.Domain.Transactions;
using MediatR;

namespace Finances.Application.Transactions.UpdateTransaction;

public record UpdateTransactionCommand(Guid TransactionId ,decimal? Amount, Guid? AccountId, Guid? CategoryId, DateTime? ExpiredAt, 
    TransactionStatus? Status, Guid? AccountDestinationId, string? Description) : IRequest<Guid>;