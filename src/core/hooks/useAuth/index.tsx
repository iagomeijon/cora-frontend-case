import { useState } from "react";
import axios from "axios";
import IAuthResponse from "./interfaces";

export default function useAuth() {
  const [authToken, setAuthToken] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const headers = {
    "Content-Type": "application/json",
  };

  function clean(): void {
    setIsLoading(false);
    setAuthToken("");
    localStorage.removeItem("authToken");
  }

  function logout(): void {
    clean();
  }

  async function login(cpf: string, password: string): Promise<void> {
    clean();
    setIsLoading(true);
    try {
      const response = await axios.post<IAuthResponse>(
        "/auth",
        {
          cpf: cpf,
          password: password,
        },
        {
          headers,
        }
      );

      if (response.data.token) {
        setAuthToken(response.data.token);
        localStorage.setItem("authToken", response.data.token);
      }
    } finally {
      setIsLoading(false);
    }
  }

  return {
    state: {
      isLoading,
      authToken,
    },

    actions: {
      login,
      clean,
      logout,
    },
  };
}
