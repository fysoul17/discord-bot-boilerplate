import TokenModel from "../database/models/Token";
import { IToken } from "../database/models/Token";

export const getTokenData = async (id: string): Promise<IToken> => {
  const tokenData =
    (await TokenModel.findOne({ discordId: id })) ||
    (await TokenModel.create({
      discordId: id,
      symbol: "AVGS",
      amount: 0,
    }));

  return tokenData;
};
