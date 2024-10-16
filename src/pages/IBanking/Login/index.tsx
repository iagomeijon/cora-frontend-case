import { useState, ChangeEvent, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import logoFullImage from "../../../assets/svg/logo-full.svg";
import arrowRightImage from "../../../assets/svg/arrow-right.svg";
import { useAuthContext } from "../../../core/contexts/authContext";
import "./index.css";

function Login() {
  const { getToken, authToken } = useAuthContext();
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
    getToken(cpf, password);
  };

  const goToTransactions = () => {
    navigate('/transactions');
  }

  useEffect(() => {
    if(authToken !== '') {
      goToTransactions();
    }
  }, [authToken])

  return (
    <main id="login">
      <div className="wrapper">
        <img src={logoFullImage} alt="Cora" title="Cora" />
        <h1>Fazer Login</h1>
        <input
          id="cpf"
          placeholder="Insira seu e-mail ou CPF"
          onChange={handleChangeCPF}
        />
        <input
          id="password"
          placeholder="Digite sua senha"
          type="password"
          onChange={handleChangePassword}
        />
        <button onClick={handleAuth}>
          Continuar
          <img src={arrowRightImage} />
        </button>
      </div>
    </main>
  );
}

export { Login };
