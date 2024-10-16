export interface AuthContextInterface {
  isLoading?: boolean;
  authToken?: string;
  getToken: (cpf: string, password: string) => void;
}
