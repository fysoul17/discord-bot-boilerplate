import { ButtonBuilder, ButtonStyle } from "discord.js";
import { ActionRowBuilder } from "discord.js";

/**
 * the value is fixed.
 */
export const buildButton = ({ id, label, style = ButtonStyle.Primary, disabled = false }: { id: string; label: string; style?: ButtonStyle; disabled?: boolean }) =>
  new ButtonBuilder().setCustomId(id).setStyle(style).setLabel(label).setDisabled(disabled);

export function actionRowButtonBuilder(components: ButtonBuilder[]) {
  return new ActionRowBuilder<ButtonBuilder>().addComponents(components);
}
