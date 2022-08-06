import { Client } from "discord.js";
import { IntentOptions } from "./config/IntentOptions";
import { dbConnection } from "./database/DBConnection";
import { onInteraction } from "./events/onInteraction";
import { onReady } from "./events/onReady";
import { validateEnv } from "./utils/ValidateEnv";

//https://discordjs.guide/
(async () => {
  // Validate .evn
  if (!validateEnv()) return;

  // Init BOT client.
  const client = new Client({ intents: IntentOptions });

  // Add events.
  client.on("ready", async () => await onReady(client));
  client.on("interactionCreate", async (interaction) => await onInteraction(interaction));

  // Connect DB.
  await dbConnection();

  // Login.
  await client.login(process.env.BOT_TOKEN);
})();
