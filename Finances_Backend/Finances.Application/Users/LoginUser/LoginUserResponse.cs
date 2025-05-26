using Finances.Domain.Users;

namespace Finances.Application.Users.LoginUser;

public record LoginUserResponse(User user, string Token);