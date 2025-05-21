using MediatR;

namespace Finances.Application.Users.GetUsers;

public record GetUsersQuery : IRequest<IEnumerable<UserResponse>>;