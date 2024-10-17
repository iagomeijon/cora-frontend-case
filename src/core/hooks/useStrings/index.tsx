import { useState } from "react";
import { Language, StringsType } from "./interfaces";

export default function useStrings(initialLanguage?: Language) {
  const [language, setLanguage] = useState<Language>(
    initialLanguage || Language.ptBR
  );

  const strings: { [language: string]: StringsType } = {
    ptBR: {
      components: {
        Login: {
          title: "Fazer Login",
          cpfInput: "Insira seu e-mail ou CPF",
          passwordInput: "Digite sua senha",
          button: "Continuar",
        },
        Transactions: {
          debit: "Débito",
          credit: "Crédito",
          balanceTitle: "saldo do dia",
        },
      },
    },
  };

  return {
    strings: strings[language],
    language,
    setLanguage,
  };
}
