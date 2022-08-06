import { SlashCommandBuilder } from "discord.js";
import { ICommand } from "./Command";
import { getTokenData } from "../modules/getTokenData";
import { mintToken } from "../modules/mintToken";

export const mintCommand: ICommand = {
  data: new SlashCommandBuilder()
    .setName("mint")
    .setDescription("mint token")
    .addNumberOption((option) => option.setName("amount").setMinValue(0).setDescription("생성할 AVGS 토큰 개수").setRequired(true))
    .addUserOption((option) => option.setName("to").setDescription("받을 사람").setRequired(true)),

  execute: async (interaction) => {
    await interaction.deferReply();

    //const { user: sender } = interaction;
    const amount = interaction.options.get("amount", true);
    const user = interaction.options.get("to", true);

    const currentToken = await getTokenData(user.user?.id!);
    const updatedToken = await mintToken(currentToken, amount.value as number);

    await interaction.editReply(`<@${user.user?.id}>에게 ${amount.value} AVGS 토큰을 생성해주었습니다. [토큰보유: ${updatedToken.amount}]`);
  },
};
