using Finances.Application.Transactions.Dtos;
using MediatR;

namespace Finances.Application.Transactions.GetByIdTransaction;

public record GetByIdTransactionQuery(Guid TransactionId) : IRequest<TransactionResponse>;