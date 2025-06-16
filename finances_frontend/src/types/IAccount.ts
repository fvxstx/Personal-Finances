export interface IAccount {
  account: {
    id: string;
    createdAt: string;
    updatedAt: string;
    name: string;
    icon_Id: number;
    total_Balance: number;
    user_Id: number;
    balanceStatus: number;
  };
}

export interface ICreateAccount {
  name: string;
  iconId: number;
  userId: string;
  balanceStatus: number;
  totalBalance: number;
}

export interface IUpdateAccount {
  name: string;
  iconId: number;
  balanceStatus: number;
}
