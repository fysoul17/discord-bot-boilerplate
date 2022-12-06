export const ShortTime = "t"; // 16:20
export const LongTime = "T"; // 16:20:30
export const ShortDate = "d"; // 20/04/2021
export const LongDate = "D"; // 20 April 2021
export const ShortDateTime = "f"; // (Default) 20 April 2021 16:20
export const LongDateTime = "F"; // Tuesday, 20 April 2021 16:20
export const RelativeTime = "R"; // 2 months ago

export type DiscordTimestampFlag = typeof ShortTime | typeof LongTime | typeof ShortDate | typeof LongDate | typeof ShortDateTime | typeof LongDateTime | typeof RelativeTime;

/**
 * @see https://discord.com/developers/docs/reference#message-formatting-timestamp-styles
 * @param uts unix timestamp
 * @param flag
 * @returns
 */
export function timestampRef(uts: number, flag: DiscordTimestampFlag = ShortDateTime) {
  return `<t:${uts}:${flag}>`;
}
