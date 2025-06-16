using Finances.Domain.Accounts;

namespace Finances_Backend.Accounts;

public record CreateAccountRequest(string Name, int IconId, Guid UserId, AccountBalanceStatus BalanceStatus, 
    decimal? TotalBalance);