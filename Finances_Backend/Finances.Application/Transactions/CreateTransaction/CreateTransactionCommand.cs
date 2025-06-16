using Finances.Domain.Transactions;
using MediatR;

namespace Finances.Application.Transactions.CreateTransaction;

public record CreateTransactionCommand(decimal Amount, Guid AccountId, Guid UserId, Guid CategoryId,
    DateTime ExpiredAt, TransactionType Type, TransactionStatus Status, Guid? AccountDestinationId,
    string? Description) : IRequest<Guid>;