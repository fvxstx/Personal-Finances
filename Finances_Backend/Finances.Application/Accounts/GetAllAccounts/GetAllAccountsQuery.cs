using MediatR;

namespace Finances.Application.Accounts.GetAllAccounts;

public record GetAllAccountsQuery(Guid? UserId) : IRequest<IEnumerable<AccountResponse>>;