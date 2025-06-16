using Finances.Application.Common.Abstractions;
using Finances.Domain.Categories;
using Finances.Domain.Transactions;
using Microsoft.EntityFrameworkCore;

namespace Finances.Infrastructure.Data.Categories;

internal class CategoryRepository(ApplicationDbContext dbContext) : ICategoryRepository
{
    public void Add(Category account)
    {
        dbContext.Add(account);
    }

    public async Task<IEnumerable<Category>> GetAllAsync(Guid? userId, TransactionType? transactionType)
    {
        var query = dbContext.Categories.AsQueryable();

        if (userId.HasValue)
            query = query.Where(x => x.User_Id == userId);
        if (transactionType.HasValue)
            query = query.Where(x => x.TransactionType == transactionType);

        return await query.AsTracking().ToListAsync();
    }

    public async Task<Category?> GetByIdAsync(Guid id)
    {
        return await dbContext.Categories.FirstOrDefaultAsync(x => x.Id == id);
    }

    public void Update(Category account)
    {
        dbContext.Update(account);
    }

    public void Delete(Category account)
    {
        dbContext.Remove(account);
    }

    public IUnitOfWork UnitOfWork => dbContext;
}