require("dotenv").config();
const tmi = require("tmi.js");

const client = new tmi.Client({
  options: { debug: true },
  connection: { reconnect: true, secure: true },
  identity: {
    username: process.env.BOT_USERNAME,
    password: process.env.OAUTH_TOKEN
  },
  channels: [process.env.CHANNEL_NAME]
});

client.connect().catch(err => {
  console.error("Connection failed:", err);
});

client.on("message", (channel, tags, message, self) => {
  if (self) return;

  if (message.toLowerCase() === "hello") {
    client.say(channel, `Yo ${tags.username}, what's good on foe nem!`);
  }
});
