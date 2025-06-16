using Finances.Application.Common.Abstractions;
using MediatR;

namespace Finances.Application.Transactions.UpdateTransaction;

internal class UpdateTransactionCommandQuery(ITransactionRepository transactionRepository) : 
    IRequestHandler<UpdateTransactionCommand, Guid>
{
    public async Task<Guid> Handle(UpdateTransactionCommand request, CancellationToken cancellationToken)
    {
        var transaction = await transactionRepository.GetByIdAsync(request.TransactionId);
        if (transaction == null) throw new Exception("Transação não encontrada");

        transaction.UpdateTransaction(request.Amount, request.AccountId, request.CategoryId, request.ExpiredAt,
            request.Status, request.AccountDestinationId, request.Description);
        transactionRepository.Update(transaction);
        await transactionRepository.UnitOfWork.CommitAsync(cancellationToken);
        return transaction.Id;
    }
}