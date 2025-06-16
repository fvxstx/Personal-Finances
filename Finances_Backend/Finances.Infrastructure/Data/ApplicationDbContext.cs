using Finances.Application.Common.Abstractions;
using Finances.Domain.Accounts;
using Finances.Domain.Categories;
using Finances.Domain.CodesValidation;
using Finances.Domain.Transactions;
using Finances.Domain.Users;
using Microsoft.EntityFrameworkCore;

namespace Finances.Infrastructure.Data;

public class ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : DbContext(options), IUnitOfWork
{
    public DbSet<User> Users => Set<User>();
    public DbSet<CodeValidation> CodesValidations => Set<CodeValidation>();
    public DbSet<Account> Accounts => Set<Account>();
    public DbSet<Category> Categories => Set<Category>();
    public DbSet<Transaction> Transactions => Set<Transaction>();
    
    public Task CommitAsync(CancellationToken cancellationToken) => base.SaveChangesAsync(cancellationToken);
}