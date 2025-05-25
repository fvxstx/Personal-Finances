namespace Finances.Application.Common.Abstractions;

public interface IJwtService
{
    string GenerateToken(Guid userId, string email);
}