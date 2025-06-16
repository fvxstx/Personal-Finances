using Finances.Application.Common.Abstractions;
using MediatR;

namespace Finances.Application.Accounts.DeleteAccount;

internal class DeleteAccountCommandHandler(IAccountRepository accountRepository) : IRequestHandler<DeleteAccountCommand, bool>
{
    public async Task<bool> Handle(DeleteAccountCommand request, CancellationToken cancellationToken)
    {
        var account = await accountRepository.GetByIdAsync(request.AcccountId);
        if (account == null) throw new Exception("Conta não encontrada");

        accountRepository.Delete(account);
        await accountRepository.UnitOfWork.CommitAsync(cancellationToken);
        return true;
    }
}