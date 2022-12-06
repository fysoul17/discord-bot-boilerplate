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
- Make sure to whitelist the Cloud Run IP

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
DISCORD_CHANNEL_ID_MAIN="Channel ID that the bot will send a message"
```
- remove from .gitignore if it needs to be run on cloud

### Run
- `yarn install`
- for build, `yarn build`, or just `yarn start`

### GCP with Cloud Run using Github Action (Option - Est. Minimum cost: $50/Month)
- IMPORTANT: You MUST enable "Always-On" CPU allocation to use this method, because Discord bot does not start HTTP server that listens on an HTTP port (8080)
- Enable `Artifact Registry API` `Cloud Run API`
- Create Service Account with `Cloud Run Service Agent` role
- Create Key (JSON) and make it as Secret(Action) at github repo settings. Then name it `GCP_SA_KEY`
- IAM > Add roles for the service account: `Artifact Registry Administrator` `Cloud Run Admin`
- Edit `cd_production.yml` for Continuous Deployment. Replace `PROJECT_ID` `CLOUD_RUN_NAME` `GCP_REGION`
- Create `Repository` of Artifact Registry and name it as `CLOUD_RUN_NAME` value and select region that matches to `GCP_REGION` value.

### GCP with Compute Engine using Github Action (Option - Est. Minimum cost: $7~/Month)
- ~~IMPORTANT: You MUST create `Cloud Storage` in order to use terraform setting and MUST match `bucket` and `prefix` at `main.tf`~~
- Follow above `Cloud Run` settings to create credential file for `GCP_SERVICE_ACCOUNT` secret.
- Follow above `Artifact Registry` setting.
- Edit `cd_gcp_ce_terraform.yml` for Continuous Deployment. Replace variables.
- Create `Compute Engine` in GCP
- Set Docker option
  
### Digital Ocean Droplet with Github Action (Option - Est. Minimum cost: $4~$10/Month)
- Create Container Registery (free version might work, but 5G is recommended as garbage collector will take the space)
- Create Droplet with SSH Authentication option
- Connect to Droplet console, then create ssh key using below commands ([More info](https://github.com/appleboy/ssh-action))  
  `ssh-keygen -t ed25519 -a 200 -C "your@email.com"`  
  `cat .ssh/id_ed25519.pub > .ssh/authorized_keys` and copy this text into `Settings > Security tab > add SSH Key` on the left down corner at DO dashboard.  
  `cat .ssh/id_ed25519` and copy the text as github secret `SSHKEY`  
- Create github secrets  
  `HOST` is droplet ip  
  `DIGITALOCEAN_ACCESS_TOKEN` can be created at `API` menu of DO dashboard  
  `PASSPHRASE` is what you entered as passphrase for ssh creation  
  `USERNAME` is droplet username. usually `root`  
- Change env values in `yml` file  
- Copy / Paste any `.env` into the Droplet  
- NOTE: Setting env file needs some efforts than GCP.  
