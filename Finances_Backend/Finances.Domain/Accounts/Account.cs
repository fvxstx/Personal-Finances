using Finances.Domain.Abstractions;

namespace Finances.Domain.Accounts;

public class Account : BaseEntity
{
        public string Name { get; private set; } = null!;
        public int Icon_Id { get; private set; }
        public decimal? Total_Balance { get; private set; }
        public Guid User_id { get; private set; }
        public AccountBalanceStatus BalanceStatus { get; private set; }

        public static Account CreateNew(string name, int icon_id,  Guid userId, AccountBalanceStatus balanceStatus, 
                decimal? total_balance = 0 )
        {
                return new Account
                {
                        Name = name,
                        Icon_Id = icon_id,
                        User_id = userId,
                        BalanceStatus = balanceStatus,
                        Total_Balance = total_balance
                };
        }

        public void UpdateAccount(string? name, int? iconId, AccountBalanceStatus? balanceStatus)
        {
                Name = name ?? Name;
                Icon_Id = iconId ?? Icon_Id;
                BalanceStatus = balanceStatus ?? BalanceStatus;
                UpdatedAt = DateTime.UtcNow;
        }

        public void UpdateTotalBalance(decimal totalBalance)
        {
                Total_Balance = totalBalance;
                UpdatedAt = DateTime.UtcNow;
        }
        
        
}
