import { IAccount, ICreateAccount, IUpdateAccount } from "@/types/IAccount";
import { api } from "./api";

const endpoint = "accounts";

const AccountService = {
  GetAll: async (userId?: string) => {
    try {
      const url = `${endpoint}${userId && `?userId=${userId}`}`;
      const res = await api.get(url);
      return res.data as IAccount[];
    } catch (error) {
      console.log(error);
    }
  },
  Create: async (accountData: ICreateAccount) => {
    try {
      const res = await api.post(`${endpoint}`, accountData);
      return res.data as string;
    } catch (error) {
      console.log(error);
    }
  },
  Update: async (accountData: IUpdateAccount, accountId: string) => {
    try {
      const url = `${endpoint}/${accountId}`;

      const res = await api.put(url, accountData);
      return res.data as string;
    } catch (error) {
      console.log(error);
    }
  },
  Delete: async (accountId: string) => {
    try {
      const url = `${endpoint}/${accountId}`;
      const res = await api.delete(url);
      return res.data as boolean;
    } catch (error) {
      console.log(error);
    }
  },
};

export default AccountService;
