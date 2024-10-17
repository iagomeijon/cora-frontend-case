import { useState, ChangeEvent, useEffect, useCallback } from "react";
import { useNavigate } from 'react-router-dom';
import logoFullImage from "../../../assets/svg/logo-full.svg";
import arrowRightImage from "../../../assets/svg/arrow-right.svg";
import { useAuthContext } from "../../../core/contexts/authContext";
import useStrings  from "../../../core/hooks/useStrings";
import "./index.css";

function Login() {
  const { strings } = useStrings();
  const { Login: LoginStrings } = strings.components;
  const { login, logout,authToken } = useAuthContext();
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleChangeCPF = (e: ChangeEvent<HTMLInputElement>) => {
    setCpf(e.target.value);
  };

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleAuth = () => {
    login(cpf, password);
  };

  const goToTransactions = useCallback(() => {
    navigate('/transactions');
  }, [navigate]);

  useEffect(() => {
    if(authToken !== '') {
      goToTransactions();
    }
  }, [authToken, goToTransactions])

  useEffect(() => {
      logout();
  }, [])

  return (
    <main id="login">
      <div className="wrapper">
        <img src={logoFullImage} alt="Cora" title="Cora" />
        <h1>{LoginStrings.title}</h1>
        <input
          id="cpf"
          placeholder={LoginStrings.cpfInput}
          onChange={handleChangeCPF}
        />
        <input
          id="password"
          placeholder={LoginStrings.passwordInput}
          type="password"
          onChange={handleChangePassword}
        />
        <button onClick={handleAuth}>
          {LoginStrings.button}
          <img src={arrowRightImage} />
        </button>
      </div>
    </main>
  );
}

export { Login };
