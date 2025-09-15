import tmi from "tmi.js";

// Bot Config
const client = new tmi.Client({
  options: { debug: true },
  identity: {
    username: "YourBotTwitchUsername",   // your bot's Twitch account
    password: "oauth:your-oauth-token",  // from https://twitchapps.com/tmi/
  },
  channels: ["YourChannelName"], // replace with your channel, example: "daeski079"
});

// Connect bot
client.connect();

// Auto messages
const messages = [
  "Shoutout to Daeski holding it down 🔥",
  "We live with Daeski — tap in on foe nem!",
  "Hit that follow for the homie Daeski 💯",
  "Big vibes every stream with Daeski079 ✨",
];

function sendMessage() {
  const msg = messages[Math.floor(Math.random() * messages.length)];
  client.say("YourChannelName", msg);
}

// Send every 5 minutes
setInterval(sendMessage, 5 * 60 * 1000);
