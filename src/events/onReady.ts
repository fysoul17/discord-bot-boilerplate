import { REST, Routes } from "discord.js";
import { wait, sendMessageToTextChannel, ChannelName } from "../utils/helpers";
import { botClient } from "../index";
import { mainMenu } from "../messages/mainMenu";
import { slashCommands } from "./onInteraction";

export const onReady = async () => {
  await initREST();
  sendIntervalMessage();

  console.log("Bot is ready!");
  console.log(`Logged in as ${botClient.user?.tag}!`);
};

const initREST = async () => {
  const rest = new REST({ version: "10" }).setToken(process.env.BOT_TOKEN as string);
  const commandData = Object.values(slashCommands).map((command) => command.data.toJSON());

  // Public Bot
  await rest.put(Routes.applicationCommands(botClient.user?.id || "missing id"), { body: commandData });

  // Private Bot
  //await rest.put(Routes.applicationGuildCommands(BOT.user?.id || "missing id", process.env.GUILD_ID as string), { body: commandData });
};

const sendIntervalMessage = async () => {
  console.log("Bot will display instructions every 5 mins!");

  const FIVE_MINUTES = 5 * 60 * 1000;

  while (true) {
    const message = await sendMessageToTextChannel({ channelName: ChannelName.Main, message: mainMenu });
    await wait(FIVE_MINUTES);
    await message.delete();
  }
};
