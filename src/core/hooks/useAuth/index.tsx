import { useState } from 'react';
import axios from 'axios';
import  IAuthResponse from './interfaces';

export default function useAuth() {

  const [authToken, setAuthToken] = useState <string > ('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const headers = {
         'Content-Type': 'application/json'
  }

  function clean(): void {
    setIsLoading(false);
    setAuthToken('');
  }

  async function getToken(cpf: string, password: string): Promise<void> {
    clean();
    setIsLoading(true);
    try {
        const response = await axios.post<IAuthResponse>('/auth', {
            cpf: cpf,
            password: password
          }, {
            headers
          });
          
        console.log(response.data);
        setAuthToken(response.data.token);
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
      getToken,
      clean,
    },
  };
}
