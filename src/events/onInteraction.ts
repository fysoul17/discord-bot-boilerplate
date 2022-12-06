import { ButtonInteraction, Interaction } from "discord.js";
import { mintCommand } from "../commands/slashCommands/token/mintTokenCommand";
import { sendTokenCommand } from "../commands/slashCommands/token/sendTokenCommand";
import { helloTokenCommand } from "../commands/buttonCommands/token/helloTokenCommand";
import { IButtonCommand, ISlashCommand } from "../commands/Command";

export const slashCommands: Record<string, ISlashCommand> = {
  [mintCommand.data.name]: mintCommand,
  [sendTokenCommand.data.name]: sendTokenCommand,
};

export const buttonCommands: Record<string, IButtonCommand> = {
  [helloTokenCommand.id]: helloTokenCommand,
};

export const userCommandCache: { [key in string]: IButtonCommand[] } = {};

export const onInteraction = async (interaction: Interaction) => {
  try {
    if (interaction.isCommand()) {
      await slashCommands[interaction.id].execute(interaction);
    }

    if (interaction.isButton()) {
      const customId = (interaction as ButtonInteraction).customId;
      await buttonCommands[customId].execute(interaction);
    }
  } catch (e) {
    console.log("onInteraction: " + e);
  }
};
