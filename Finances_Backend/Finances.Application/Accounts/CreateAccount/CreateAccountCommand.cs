using Finances.Domain.Accounts;
using MediatR;

namespace Finances.Application.Accounts.CreateAccount;

public record CreateAccountCommand(string Name, int IconId, Guid UserId, AccountBalanceStatus BalanceStatus, 
    decimal? TotalBalance) : IRequest<Guid>;