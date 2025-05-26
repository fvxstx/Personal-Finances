using Finances.Application.Users.GetUsers;
using MediatR;

namespace Finances.Application.Users.LoginUser;

public record LoginUserCommand(string Email, string Password) : IRequest<LoginUserResponse>;