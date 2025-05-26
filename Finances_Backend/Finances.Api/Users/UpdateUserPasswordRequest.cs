namespace Finances_Backend.Users;

public record UpdateUserPasswordRequest(string NewPassword, string TokenValue);