import { SlashCommandBuilder } from "discord.js";
import { ICommand } from "../Command";
import { getTokenData } from "../../modules/token/getTokenData";
import { sendToken } from "../../modules/token/sendToken";

export const sendTokenCommand: ICommand = {
  data: new SlashCommandBuilder()
    .setName("send")
    .setDescription("send token")
    .addNumberOption((option) => option.setName("amount").setMinValue(0).setDescription("보낼 AVGS 토큰 개수").setRequired(true))
    .addUserOption((option) => option.setName("to").setDescription("받을 사람").setRequired(true)),

  execute: async (interaction) => {
    await interaction.deferReply();

    const { user: sender } = interaction;
    const amount = interaction.options.get("amount", true);
    const recipient = interaction.options.get("to", true);

    try {
      const to = await getTokenData(recipient.user?.id!);
      const from = await getTokenData(sender.id!);
      const updatedToken = await sendToken(from, to, amount.value as number);

      await interaction.editReply(`<@${sender.id}>(이)가 <@${recipient.user?.id}>에게 ${amount.value} AVGS 토큰을 전송해주었습니다. [남은토큰: ${updatedToken.amount}]`);
    } catch (e) {
      await interaction.editReply(`토큰 전송에 실패 하였습니다: ${e}`);
    }
  },
};
