using Finances.Application.Users.GetUsers;
using MediatR;

namespace Finances.Application.Users.GetByEmailUser;

public record GetUserByEmailQuery(string email) : IRequest<UserResponse>;