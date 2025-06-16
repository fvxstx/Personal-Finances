using MediatR;

namespace Finances.Application.Transactions.DeleteTransaction;

public record DeleteTransactionCommand(Guid TransactionId) : IRequest<bool>;