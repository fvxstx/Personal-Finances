using Finances.Application.Accounts.GetAllAccounts;
using Finances.Application.Common.Abstractions;
using MediatR;

namespace Finances.Application.Accounts.GetByIdAccount;

internal class GetByIdAccountQueryHandler(IAccountRepository accountRepository) : 
    IRequestHandler<GetByIdAccountQuery, AccountResponse>
{
    public async Task<AccountResponse> Handle(GetByIdAccountQuery request, CancellationToken cancellationToken)
    {
        var account = await accountRepository.GetByIdAsync(request.AccountId);
        if (account == null)
        {
            throw new Exception("Conta não encontrado");
        }

        return await Task.FromResult(new AccountResponse(account));
    }
}