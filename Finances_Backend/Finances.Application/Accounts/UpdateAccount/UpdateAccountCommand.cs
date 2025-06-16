using Finances.Domain.Accounts;
using MediatR;

namespace Finances.Application.Accounts.UpdateAccount;

public record UpdateAccountCommand(Guid AccountId ,string? Name, int? IconId, AccountBalanceStatus? BalanceStatus) : IRequest<Guid>;