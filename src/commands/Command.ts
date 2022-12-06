import { ButtonBuilder, SlashCommandBuilder, SlashCommandSubcommandsOnlyBuilder } from "@discordjs/builders";
import { ButtonInteraction, CommandInteraction } from "discord.js";

export interface ISlashCommand {
  data: Omit<SlashCommandBuilder, "addSubcommandGroup" | "addSubcommand"> | SlashCommandSubcommandsOnlyBuilder;
  execute: (interaction: CommandInteraction) => Promise<void>;
}

export interface IButtonCommand {
  id: string;
  builder: ButtonBuilder;
  execute: (interaction: ButtonInteraction) => Promise<void>;
}
