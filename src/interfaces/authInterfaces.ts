export interface IAuthState {
  accessToken: string | null;
  isLoading: boolean;
}

export interface ILogin {
  email: string;
  password: string;
}
