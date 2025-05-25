namespace Finances_Backend.Users;

public record CreateUserRequest(string Name, string Email, string Password, string Token, string? PhotoUrl);
