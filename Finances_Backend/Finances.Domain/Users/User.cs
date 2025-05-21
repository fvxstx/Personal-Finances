using Finances.Domain.Abstractions;

namespace Finances.Domain.Users;

public class User : BaseEntity
{
       public string Name { get; private set; } 
       public string Email { get; private set; } 
       public string Password { get; private set; }
       public string? Photo_Url { get; private set; }

       public static User CreateNew(string name, string email, string password, string? photo_Url)
       {
           return new User
           {
               Name = name, Email = email, Password = password, Photo_Url = photo_Url
           };
       }
       
       
}