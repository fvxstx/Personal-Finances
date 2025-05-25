using Finances.Domain.Users;

namespace Finances.Application.Common.Abstractions;

public interface IUserRepository
{
    void Add(User user);
    Task<IEnumerable<User>> GetAllAsync();
    Task<User?> GetByIdAsync(Guid userId);
    Task<User?> GetByEmailAsync(string email);
    void Update(User user);
    
    /*Task<User> UpdateProfilePhotoAsync(FileStream file, Guid userId);*/
    
    IUnitOfWork UnitOfWork { get; }
}