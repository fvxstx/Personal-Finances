using Finances.Domain.Transactions;

namespace Finances.Application.Common.Abstractions;

public interface ITransactionRepository
{
    void Add(Transaction category);
    Task<IEnumerable<Transaction>> GetAllAsync(Guid? userId, TransactionType? transactionType);
    Task<Transaction?> GetByIdAsync(Guid id);
    void Update(Transaction category);
    void Delete(Transaction category);
    
    IUnitOfWork UnitOfWork { get; }
}