using Finances.Domain.Abstractions;

namespace Finances.Domain.Transactions;

public class Transaction : BaseEntity
{
    public decimal Amount { get; private set; }
    public Guid Account_Id { get; private set; }
    public Guid User_Id { get; private set; }
    public Guid Category_Id { get; private set; }
    public DateTime Expired_At { get; private set; }
    public TransactionType Type { get; private set; }
    public TransactionStatus Status { get; private set; }
    public Guid? Account_Destination_Id { get; private set; }
    public string? Description { get; private set; }

    public static Transaction CreateNew(decimal amount, Guid accountId, Guid userId, Guid categoryId,
        DateTime expiredAt, TransactionType type, TransactionStatus status, Guid? accountDestinationId,
        string? description)
    {
        return new Transaction
        {
            Amount = amount,
            Account_Id = accountId,
            User_Id = userId,
            Category_Id = categoryId,
            Expired_At = expiredAt,
            Type = type,
            Status = status,
            Account_Destination_Id = accountDestinationId,
            Description = description
        };
    }

    public void UpdateTransaction(decimal? amount, Guid? accountId, Guid? categoryId, DateTime? expiredAt, 
        TransactionStatus? status, Guid? accountDestinationId, string? description)
    {
        Amount = amount ?? Amount;
        Account_Id = accountId ?? Account_Id;
        Category_Id = categoryId ?? Category_Id;
        Expired_At = expiredAt ?? Expired_At;
        Status = status ?? Status;
        Account_Destination_Id = accountDestinationId ?? Account_Destination_Id;
        Description = description ?? Description;
    }

}