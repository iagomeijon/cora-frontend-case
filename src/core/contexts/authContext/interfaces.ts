export interface AuthContextInterface {
  isLoading?: boolean;
  authToken?: string;
  login: (cpf: string, password: string) => void;
  logout: () => void;
}
