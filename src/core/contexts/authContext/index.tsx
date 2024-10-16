
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

  function login(cpf: string, password: string) {
    actions.login(cpf, password);
  }

  function logout() {
    actions.logout();
  }

  return (
    <AuthContext.Provider
      value={{
        isLoading: state.isLoading,
        authToken: state.authToken,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvder, useAuthContext };
