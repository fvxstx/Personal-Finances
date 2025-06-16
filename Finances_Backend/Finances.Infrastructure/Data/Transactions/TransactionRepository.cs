using Finances.Application.Common.Abstractions;
using Finances.Domain.Transactions;
using Microsoft.EntityFrameworkCore;

namespace Finances.Infrastructure.Data.Transactions;

internal class TransactionRepository(ApplicationDbContext dbContext) : ITransactionRepository
{
    public void Add(Transaction transaction)
    {
        dbContext.Add(transaction);
    }

    public async Task<IEnumerable<Transaction>> GetAllAsync(Guid? userId, TransactionType? transactionType)
    {
        var query = dbContext.Transactions.AsQueryable();

        if (userId.HasValue)
            query = query.Where(x => x.User_Id == userId);
        if (transactionType.HasValue)
            query = query.Where(x => x.Type == transactionType);

        return await query.AsTracking().ToListAsync();
    }

    public async Task<Transaction?> GetByIdAsync(Guid id)
    {
        return await dbContext.Transactions.FirstOrDefaultAsync(x => x.Id == id);
    }

    public void Update(Transaction transaction)
    {
        dbContext.Update(transaction);

    }

    public void Delete(Transaction transaction)
    {
        dbContext.Remove(transaction);
    }

    public IUnitOfWork UnitOfWork => dbContext;
}