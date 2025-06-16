using MediatR;

namespace Finances.Application.Accounts.DeleteAccount;

public record DeleteAccountCommand(Guid AcccountId) : IRequest<bool>;