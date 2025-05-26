using Finances.Domain.Abstractions;

namespace Finances.Domain.CodesValidation;

public class CodeValidation : BaseEntity
{
    public string Value { get; private set; } = null!;
    public bool Is_Active { get; private set; } = true;
    public CodeValidationType Type { get; private set; }
    public int Expiration_Time { get; private set; }
    public Guid? User_Id { get; private set; }

    public static CodeValidation CreateNew(string value, CodeValidationType type, int expiration_time, Guid? user_id = null)
    {
        return new CodeValidation
        {
            Value = value,
            Type = type,
            Expiration_Time = expiration_time,
            User_Id = user_id
        };
    }

    public void UpdateIsActive(bool is_active)
    {
        Is_Active = is_active;
        UpdatedAt = DateTime.UtcNow;
    }
}

