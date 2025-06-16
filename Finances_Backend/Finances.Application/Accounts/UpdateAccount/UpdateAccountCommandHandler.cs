using Finances.Application.Common.Abstractions;
using MediatR;

namespace Finances.Application.Accounts.UpdateAccount;

internal class UpdateAccountCommandHandler(IAccountRepository accountRepository) : 
    IRequestHandler<UpdateAccountCommand, Guid>
{
    public async Task<Guid> Handle(UpdateAccountCommand request, CancellationToken cancellationToken)
    {
        var account = await accountRepository.GetByIdAsync(request.AccountId);
        if (account == null) throw new Exception("Conta não encontrada");
        
        account.UpdateAccount(request.Name, request.IconId, request.BalanceStatus);
        accountRepository.Update(account);
        await accountRepository.UnitOfWork.CommitAsync(cancellationToken);
        return account.Id;
    }
}