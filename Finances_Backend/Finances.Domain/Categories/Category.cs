using Finances.Domain.Abstractions;
using Finances.Domain.Transactions;

namespace Finances.Domain.Categories;

public class Category : BaseEntity
{
    public string Name { get; private set; } = null!;
    public int Icon_Id { get; private set; }
    public string Color_Hex { get; private set; } = null!;
    public Guid User_Id { get; private set; }
    public TransactionType TransactionType { get; private set; }
    public CategoryType Type { get; private set; }

    
    public static Category CreateNew(string name, int iconId, string colorHex, Guid userId,
        TransactionType transactionType, CategoryType type)
    {
        return new Category
        {
            Name = name,
            Icon_Id = iconId,
            Color_Hex = colorHex,
            User_Id = userId,
            TransactionType = transactionType,
            Type = type
        };
    }

    public void UpdateCategory(string? name, int? iconId, string? colorHex)
    {
        Name = name ?? Name;
        Icon_Id = iconId ?? Icon_Id;
        Color_Hex = colorHex ?? Color_Hex;
        UpdatedAt = DateTime.UtcNow;
    }
    
}
