using Finances.Application.Common.Abstractions;
using MediatR;

namespace Finances.Application.Accounts.GetAllAccounts;

internal class GetAllAccountsQueryHandler(IAccountRepository accountRepository) : 
    IRequestHandler<GetAllAccountsQuery, IEnumerable<AccountResponse>>
{
    public async Task<IEnumerable<AccountResponse>> Handle(GetAllAccountsQuery request,
        CancellationToken cancellationToken)
    {
        var accounts = await accountRepository.GetAllAsync(request.UserId);
        return await Task.FromResult(accounts.Select(acc => new AccountResponse(acc)).ToList());
    }
}