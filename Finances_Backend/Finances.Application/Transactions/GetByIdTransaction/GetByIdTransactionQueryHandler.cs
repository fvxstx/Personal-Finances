using Finances.Application.Common.Abstractions;
using Finances.Application.Transactions.Dtos;
using MediatR;

namespace Finances.Application.Transactions.GetByIdTransaction;

internal class GetByIdTransactionQueryHandler(ITransactionRepository transactionRepository) : 
    IRequestHandler<GetByIdTransactionQuery, TransactionResponse>
{
    public async Task<TransactionResponse> Handle(GetByIdTransactionQuery request, CancellationToken cancellationToken)
    {
        var category = await transactionRepository.GetByIdAsync(request.TransactionId);
        if (category == null) throw new Exception("Transação não encontrado");
        
        return await Task.FromResult(new TransactionResponse(category));
    }
}