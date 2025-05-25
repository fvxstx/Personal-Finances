using Finances.Domain.Abstractions;

namespace Finances.Domain.Users;

public class User : BaseEntity
{
       public string Name { get; private set; } = null!;
       public string Email { get; private set; } = null!;
       public string Password { get; private set; } = null!;
       public string? Photo_Url { get; private set; }

       public static User CreateNew(string name, string email, string password, string? photo_Url)
       {
           return new User
           {
               Name = name, Email = email, Password = password, Photo_Url = photo_Url
           };
       }

       public void UpdateUser(string? name, string? email)
       {
           Name = name ?? Name;
           Email = email ?? Email;
           UpdatedAt = DateTime.UtcNow;
       }

       public void UpdatePassword(string newPassword)
       {
           Password = newPassword;
           UpdatedAt = DateTime.UtcNow;
       }

       public void UpdatePhotoProfile(string newPhotoProfile)
       {
           Photo_Url = newPhotoProfile;
           UpdatedAt = DateTime.UtcNow;
       }
       
       
}