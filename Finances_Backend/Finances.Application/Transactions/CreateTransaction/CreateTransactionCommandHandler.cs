using Finances.Application.Common.Abstractions;
using Finances.Domain.Transactions;
using MediatR;

namespace Finances.Application.Transactions.CreateTransaction;

internal class CreateTransactionCommandHandler(ITransactionRepository transactionRepository) : 
    IRequestHandler<CreateTransactionCommand, Guid>
{
    public async Task<Guid> Handle(CreateTransactionCommand request, CancellationToken cancellationToken)
    {
        var transaction = Transaction.CreateNew(request.Amount, request.AccountId, request.UserId, request.CategoryId,
            request.ExpiredAt, request.Type, request.Status, request.AccountDestinationId, request.Description);

        transactionRepository.Add(transaction);
        await transactionRepository.UnitOfWork.CommitAsync(cancellationToken);

        return transaction.Id;
    }
}