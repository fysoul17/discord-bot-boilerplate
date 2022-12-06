import { ButtonBuilder, ButtonStyle, EmbedBuilder } from "discord.js";
import { userCommandCache } from "../../events/onInteraction";
import { IButtonCommand } from "../Command";

const id = "navigation-prev-command";

export const previousCommand: IButtonCommand = {
  id: id,
  builder: new ButtonBuilder().setCustomId(id).setLabel(`<`).setStyle(ButtonStyle.Secondary),
  execute: async (interaction) => {
    const { user } = interaction;

    // Need to pop current one.
    const currentCommand = userCommandCache[user.id].pop();

    // Then execute previous command.
    const prevCommand = userCommandCache[user.id].pop();

    await prevCommand?.execute(interaction);
  },
};

export const cacheCommand = (userId: string, command: IButtonCommand) => {
  if (!userCommandCache[userId]) userCommandCache[userId] = [] as IButtonCommand[];

  userCommandCache[userId].push(command);
};
