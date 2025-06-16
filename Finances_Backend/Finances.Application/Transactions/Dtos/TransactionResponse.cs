using System.Transactions;
using Transaction = Finances.Domain.Transactions.Transaction;

namespace Finances.Application.Transactions.Dtos;

public record TransactionResponse(Transaction Transaction);