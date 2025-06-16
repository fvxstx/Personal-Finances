using Finances.Application.Transactions.Dtos;
using Finances.Domain.Transactions;
using MediatR;

namespace Finances.Application.Transactions.GetAllTransactions;

public record GetAllTransactionsQuery(Guid? UserId, TransactionType? TransactionType) : IRequest<IEnumerable<TransactionResponse>>;