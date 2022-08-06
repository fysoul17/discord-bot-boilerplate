import { IToken } from "../database/models/Token";

export const mintToken = async (token: IToken, amount: number) => {
  if (amount > 0) {
    token.amount += amount;

    await token.save();
  }

  return token;
};
