import { ButtonBuilder, ButtonStyle, EmbedBuilder } from "discord.js";
import { IMG_HORIZONTAL_LINE } from "../../../attachments/attachments";
import { actionRowButtonBuilder } from "../../../components/button";
import { PRIMARY_COLOR } from "../../../utils/constant";
import { IButtonCommand } from "../../Command";

const id = "hello-token-command";

export const helloTokenCommand: IButtonCommand = {
  id: id,
  builder: new ButtonBuilder().setCustomId(id).setLabel(`Build`).setStyle(ButtonStyle.Primary),
  execute: async (interaction) => {
    //cacheCommand(interaction.user.id, buildMenuCommand);

    await interaction.reply({ embeds: [imageEmbed, textEmbed], ephemeral: true, components: [], files: [IMG_HORIZONTAL_LINE] });
  },
};

const imageEmbed = new EmbedBuilder().setColor(PRIMARY_COLOR).setImage("https://www.gstatic.com/webp/gallery3/2.png");
const textEmbed = new EmbedBuilder()
  .setColor(0x00d7f4)
  .setDescription(
    `
Hello Token
`
  )
  .setImage("attachment://horizontal.png");

// NOTE: But this as components: []
//const firstRow = actionRowButtonBuilder([tokenInfoCommand.builder]);
