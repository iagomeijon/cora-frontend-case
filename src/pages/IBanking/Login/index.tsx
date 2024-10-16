import { useState, ChangeEvent } from "react";
import logoFullImage from "../../../assets/svg/logo-full.svg";
import arrowRightImage from "../../../assets/svg/arrow-right.svg";
import { useAuthContext } from '../../../core/contexts';
import "./index.css";

function Login() {

  const {getToken} = useAuthContext();
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeCPF = (e: ChangeEvent<HTMLInputElement>) => {
    setCpf(e.target.value);
  };

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleAuth = () => {
    getToken(cpf, password);
  };

  return (
    <main id="login">
      <div className="wrapper">
        <img src={logoFullImage} alt="Cora" title="Cora" />
        <h1>Fazer Login</h1>
        <input id="cpf" placeholder="Insira seu e-mail ou CPF" onChange={handleChangeCPF} />
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
