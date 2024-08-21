export interface LoginData {
  email: string;
  password: string;
}

export interface User {
  id: number;
  email: string;
  name: string;
  role: string;
  avatar: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  successMessage: string | null;
  errorMessage: string | null;
}
