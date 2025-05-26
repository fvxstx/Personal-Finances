using Finances.Application.Users.GetUsers;
using MediatR;

namespace Finances.Application.Users.UpdateUser;

public record UpdateUserCommand(Guid UserId, string? Name, string? Email) : IRequest<Guid>;