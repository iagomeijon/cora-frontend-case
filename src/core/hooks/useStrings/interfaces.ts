export enum Language {
  ptBR = "ptBR",
}

export interface StringsType {
  components: {
    Login: {
      title: string;
      cpfInput: string;
      passwordInput: string;
      button: string;
    };
    Transactions: {
      debit: string;
      credit: string;
      balanceTitle: string;
    };
  };
}
