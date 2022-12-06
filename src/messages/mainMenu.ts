import { EmbedBuilder } from "discord.js";
import { actionRowButtonBuilder } from "../components/button";
import { PRIMARY_COLOR } from "../utils/constant";
import { helloTokenCommand } from "../commands/buttonCommands/token/helloTokenCommand";

// Embeds
const imageEmbed = new EmbedBuilder().setColor(PRIMARY_COLOR).setImage("https://storage.googleapis.com/altverse-media-bucket/prod/static/img_botler.png");
const textEmbed = new EmbedBuilder()
  .setColor(PRIMARY_COLOR)
  .setDescription(
    `
Welcome to Clash of Guilds 
`
  )
  .setImage("https://storage.googleapis.com/altverse-media-bucket/prod/static/img_horizontal_linex2.png");

// Buttons
const firstRow = actionRowButtonBuilder([helloTokenCommand.builder]);

export const mainMenu = { embeds: [imageEmbed, textEmbed], components: [firstRow] };
