using Finances.Application.Common.Abstractions;
using Finances.Domain.Accounts;
using MediatR;

namespace Finances.Application.Accounts.CreateAccount;

internal class CreateAccountCommandHandler(IAccountRepository accountRepository) : 
    IRequestHandler<CreateAccountCommand, Guid>
{
    public async Task<Guid> Handle(CreateAccountCommand request, CancellationToken cancellationToken)
    {
        var account = Account.CreateNew(request.Name, request.IconId, request.UserId, request.BalanceStatus,
            request.TotalBalance);
        accountRepository.Add(account);
        await accountRepository.UnitOfWork.CommitAsync(cancellationToken);
        return account.Id;
    } 
}