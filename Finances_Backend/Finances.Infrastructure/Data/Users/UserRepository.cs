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
        return await dbContext.Users.FindAsync(userId);
    }

    public void Update(User user)
    {
        dbContext.Update(user);
    }

    /*public async Task<User> UpdateProfilePhotoAsync(FileStream file, Guid userId)
    {
        User? user = await dbContext.Users.FindAsync(userId);
        if (user == null)
            throw new Exception("User not found");
        
        dbContext.Users.Update(user);
        await dbContext.SaveChangesAsync();

        return user;
    }*/
    
    public IUnitOfWork UnitOfWork => dbContext;
}