import mongoose from "mongoose";
import { IToken } from "../../database/models/Token";

export const sendToken = async (from: IToken, to: IToken, amount: number) => {
  if (amount < 0) throw Error(`SendToken: Token must be greater than 0`);
  if (from.amount - amount < 0) throw Error(`SendToken: Insufficient token (have ${from.amount}, but trying to send ${amount})`);

  to.amount += amount;
  from.amount -= amount;

  const session = await mongoose.startSession();
  session.startTransaction();
  await to.save({ session });
  await from.save({ session });
  await session.commitTransaction();
  session.endSession();

  return from;
};
