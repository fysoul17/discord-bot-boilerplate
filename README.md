# Discord Bot Boilerplate

## Pre-requisite
### Bot Creation
- Create Discord Bot [Application](https://discord.com/developers/applications)
- Add Bot at 'Bot' tab
- Toggle 'Public bot' to off
- Copy Token

### Join bot to server
- Select 'URL Generator' at 'OAuth2' tab
- Under 'Scopes', select `bot` and `application.commands`
- Select `Send Messages` `Embed Links` `Read Messages/View Channels` in 'Bot Permissions' selections
- Copy URL into the browser

### Create MongoDB
- Create any MongoDB atlas

### Environment Values
- Create .env file
- Copy and Paste, then fill variables
```
BOT_TOKEN="MTAwNTM4MzU1NjYwNTkzNTY3Ng.GTPvG_.rRrAFb-kM5E1njU7M_ecNxm5WiH2-Pf_dL5rus"

MONGO_CLUSTER="mongodb+srv://<username>:<password>@(URL of MongoDB Cluster)"
MONGO_USER="MongoDB Username"
MONGO_PASSWORD="MongoDB Password"
APPLICATION_ID="Application ID of Discord Application"
GUILD_ID="Channel ID that can be found in Discord Settings Tab. Developer setting must be on in your personal settings"
```

Use it!
