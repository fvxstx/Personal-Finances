using Finances.Application.Users.GetUsers;
using MediatR;

namespace Finances.Application.Users.GetByIdUser;

public record GetUserByIdQuery(Guid userId) : IRequest<UserResponse>;