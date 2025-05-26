namespace Finances.Application.Common.Abstractions;

public interface IHashService
{
    string HashValue(string value);
    bool VerifyValue(string enteredValue, string storedHash);
}