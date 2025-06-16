using Finances.Application.Common.Abstractions;
using MediatR;

namespace Finances.Application.Transactions.DeleteTransaction;

internal class DeleteTransactionCommandHandler(ITransactionRepository transactionRepository) : 
    IRequestHandler<DeleteTransactionCommand, bool>
{
    public async Task<bool> Handle(DeleteTransactionCommand request, CancellationToken cancellationToken)
    {
        var transaction = await transactionRepository.GetByIdAsync(request.TransactionId);
        if (transaction is null) throw new Exception("Categoria nunca encontrada");
        
        transactionRepository.Delete(transaction);
        await transactionRepository.UnitOfWork.CommitAsync(cancellationToken);
        return true;
    }
}