
import { createContext, useContext, ReactNode } from 'react';

import useAuth from '../../hooks/useAuth';

import { AuthContextInterface } from './interfaces';

const AuthContext = createContext<AuthContextInterface>(
  {} as AuthContextInterface,
);

function useAuthContext(): AuthContextInterface {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider.');
  }
  return context;
}

const AuthProvder = (props: { children: ReactNode }) => {
  const { children } = props;
  const { actions, state } = useAuth();

  function getToken(cpf: string, password: string) {
    actions.getToken(cpf, password);
  }

  return (
    <AuthContext.Provider
      value={{
        isLoading: state.isLoading,
        authToken: state.authToken,
        getToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvder, useAuthContext };
