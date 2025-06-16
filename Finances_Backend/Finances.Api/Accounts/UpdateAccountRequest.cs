using Finances.Domain.Accounts;

namespace Finances_Backend.Accounts;

public record UpdateAccountRequest(string? Name, int? IconId, AccountBalanceStatus? BalanceStatus);