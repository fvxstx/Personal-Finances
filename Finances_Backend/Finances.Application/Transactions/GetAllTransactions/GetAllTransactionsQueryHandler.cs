using Finances.Application.Common.Abstractions;
using Finances.Application.Transactions.Dtos;
using MediatR;

namespace Finances.Application.Transactions.GetAllTransactions;

internal class GetAllTransactionsQueryHandler(ITransactionRepository transactionRepository) :
    IRequestHandler<GetAllTransactionsQuery, IEnumerable<TransactionResponse>>
{
    public async Task<IEnumerable<TransactionResponse>> Handle(GetAllTransactionsQuery request,
        CancellationToken cancellationToken)
    {
        var transactions = await transactionRepository.GetAllAsync(request.UserId, request.TransactionType);
        return await Task.FromResult(transactions.Select(c => new TransactionResponse(c)).ToList());
    }
}