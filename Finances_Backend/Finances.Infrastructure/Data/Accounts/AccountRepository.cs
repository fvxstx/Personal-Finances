using Finances.Application.Common.Abstractions;
using Finances.Domain.Accounts;
using Microsoft.EntityFrameworkCore;

namespace Finances.Infrastructure.Data.Accounts;

internal class AccountRepository(ApplicationDbContext dbContext) : IAccountRepository
{
    public void Add(Account account)
    {
        dbContext.Add(account);
    }

    public async Task<IEnumerable<Account>> GetAllAsync(Guid? userId)
    {
        var query = dbContext.Accounts.AsQueryable();

        if (userId.HasValue)
            query = query.Where(x => x.User_id == userId);

        return await query.AsTracking().ToListAsync();
    }

    public async Task<Account?> GetByIdAsync(Guid id)
    {
        return await dbContext.Accounts.FirstOrDefaultAsync(x => x.Id == id);
    }

    public void Update(Account account)
    {
        dbContext.Update(account);
    }

    public void Delete(Account account)
    {
        dbContext.Remove(account);
    }

    public IUnitOfWork UnitOfWork => dbContext;
}