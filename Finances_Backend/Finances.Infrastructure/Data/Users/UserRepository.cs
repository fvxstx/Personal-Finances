using Finances.Application.Common.Abstractions;
using Finances.Domain.Users;
using Microsoft.EntityFrameworkCore;

namespace Finances.Infrastructure.Data.Users;

internal class UserRepository(ApplicationDbContext dbContext) : IUserRepository
{
    public void Add(User user)
    {
        dbContext.Add(user);
    }

    public async Task<IEnumerable<User>> GetAllAsync()
    {
        return await dbContext.Users.AsTracking().ToListAsync();
    }

    public async Task<User?> GetByIdAsync(Guid userId)
    {
        return await dbContext.Users.FirstOrDefaultAsync(x => x.Id == userId);
    }
    
    public async Task<User?> GetByEmailAsync(string email)
    {
        return await dbContext.Users.FirstOrDefaultAsync(x => x.Email == email);
    }

    public void Update(User user)
    {
        dbContext.Update(user);
    }
    
    public IUnitOfWork UnitOfWork => dbContext;
}