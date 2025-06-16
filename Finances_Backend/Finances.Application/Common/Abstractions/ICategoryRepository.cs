using Finances.Domain.Categories;
using Finances.Domain.Transactions;

namespace Finances.Application.Common.Abstractions;

public interface ICategoryRepository
{
    void Add(Category category);
    Task<IEnumerable<Category>> GetAllAsync(Guid? userId, TransactionType? transactionType);
    Task<Category?> GetByIdAsync(Guid id);
    void Update(Category category);
    void Delete(Category category);
    
    IUnitOfWork UnitOfWork { get; }
}