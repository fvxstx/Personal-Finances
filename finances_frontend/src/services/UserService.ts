import { ILoginForm, ILoginResponse } from "@/types/IUser";
import { api } from "./api";

const endpoint = "user";

const UserService = {
  Login: async (data: ILoginForm) => {
    try {
      const res = await api.post(`${endpoint}/login`, data, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      return res.data as ILoginResponse;
    } catch (error) {
      console.error(error);
    }
  },
};

export default UserService;
