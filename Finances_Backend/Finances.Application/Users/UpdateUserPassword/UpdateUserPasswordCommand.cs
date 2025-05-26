using MediatR;

namespace Finances.Application.Users.UpdateUserPassword;

public record UpdateUserPasswordCommand(string NewPassword, string TokenValue) : IRequest<Guid>;