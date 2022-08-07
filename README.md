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
BOT_TOKEN="Bot Token ID"

MONGO_CLUSTER="mongodb+srv://<username>:<password>@(URL of MongoDB Cluster)"
MONGO_USER="MongoDB Username"
MONGO_PASSWORD="MongoDB Password"
APPLICATION_ID="Application ID of Discord Application"
GUILD_ID="Channel ID that can be found in Discord Settings Tab. Developer setting must be on in your personal settings"
```

### Run
- `yarn install`
- for build, `yarn build`, or just `yarn start`

### GCP with Github Action
- Enable `Artifact Registry API` `Cloud Run API`
- Create Service Account with `Cloud Run Service Agent` role
- Create Key (JSON) and make it as Secret(Action) at github repo settings. Then name it `GCP_SA_KEY`
- IAM > Add roles for the service account: `Artifact Registry Administrator` `Cloud Run Admin`
- Edit `cd_production.yml` for Continuous Deployment. Replace `PROJECT_ID` `CLOUD_RUN_NAME` `GCP_REGION`
