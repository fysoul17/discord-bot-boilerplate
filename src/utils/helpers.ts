import { Message, MessageCreateOptions, MessagePayload, TextChannel } from "discord.js";
import { botClient } from "../index";
import { RelativeTime, timestampRef } from "./discord";

export const wait = async (ms: number) => {
  return new Promise<any>((resolve) => setTimeout(() => resolve(""), ms));
};

export enum ChannelName {
  Main,
  Rewards,
}

const channels: Record<ChannelName, string> = {
  [ChannelName.Main]: process.env.DISCORD_CHANNEL_ID_MAIN!,
  [ChannelName.Rewards]: "",
};

export const sendMessageToTextChannel = ({ channelName, message }: { channelName: ChannelName; message: string | MessagePayload | MessageCreateOptions }): Promise<Message<boolean>> => {
  const channelId = channels[channelName];
  const channel = botClient.channels.cache.get(channelId) as TextChannel;
  return channel.send(message);
};

export const timeLeftFormatted = (targetDate: Date) => {
  const uts = Math.floor(+targetDate / 1000);
  const timeLeft = timeLeftInMilliseconds(targetDate);
  if (timeLeft > 0) return `Upgrades ${timestampRef(uts, RelativeTime)}`;
  return `Upgraded ${timestampRef(uts)}`;
};

export const timeLeftInMilliseconds = (targetDate: Date) => {
  const diff = +targetDate - Date.now();
  return diff;
};
