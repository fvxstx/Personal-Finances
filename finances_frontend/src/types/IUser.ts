export interface ILoginForm {
  email: string;
  password: string;
}

export interface IUser {
  createdAt: string;
  email: string;
  id: string;
  name: string;
  password: string;
  photo_url?: string;
  updatedAt?: string;
}

export interface ILoginResponse {
  token: string;
  user: IUser;
}
