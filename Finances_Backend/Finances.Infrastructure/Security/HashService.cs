using Finances.Application.Common.Abstractions;

namespace Finances.Infrastructure.Data.Common;

internal class HashService : IHashService
{
    public string HashValue(string value)
    {
        return BCrypt.Net.BCrypt.HashPassword(value);
    }

    public bool VerifyValue(string enteredValue, string storedHash)
    {
        return BCrypt.Net.BCrypt.Verify(enteredValue, storedHash);
    }
}