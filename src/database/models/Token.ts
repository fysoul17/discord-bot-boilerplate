import { Document, model, Schema } from "mongoose";

export interface IToken extends Document {
  discordId: string;
  symbol: string;
  amount: number;
}

export const Token = new Schema({
  discordId: String,
  symbol: String,
  amount: Number,
});

export default model<IToken>("token", Token);
