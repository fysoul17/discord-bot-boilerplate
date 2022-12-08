import { Client, Events } from "discord.js";
import { IntentOptions } from "./config/IntentOptions";
import { dbConnection } from "./database/DBConnection";
import { onInteraction } from "./events/onInteraction";
import { onReady } from "./events/onReady";
import { validateEnv } from "./utils/validateEnv";

export let botClient: Client<boolean>;

//https://discordjs.guide/
(async () => {
  // Validate .evn
  if (!validateEnv()) return;

  // Init BOT client.
  botClient = new Client({ intents: IntentOptions });
  if (!botClient) throw Error("Failed to create bot client");

  // Add events.
  botClient.on(Events.ClientReady, async () => await onReady());
  botClient.on(Events.InteractionCreate, async (interaction) => await onInteraction(interaction));

  // Connect DB.
  await dbConnection();

  // Login.
  await botClient.login(process.env.BOT_TOKEN);
})();
