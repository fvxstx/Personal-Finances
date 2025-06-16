using Finances.Domain.Accounts;

namespace Finances.Application.Common.Abstractions;

public interface IAccountRepository
{
    void Add(Account account);
    Task<IEnumerable<Account>> GetAllAsync(Guid? userId);
    Task<Account?> GetByIdAsync(Guid id);
    void Update(Account account);
    void Delete(Account account);
    
    IUnitOfWork UnitOfWork { get; }
}