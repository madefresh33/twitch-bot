// Import the tmi.js library
import tmi from "tmi.js";

// Bot configuration
const client = new tmi.Client({
  options: { debug: true },
  identity: {
    username: process.env.BOT_USERNAME, // Bot's Twitch username
    password: process.env.OAUTH_TOKEN   // OAuth token from environment variable
  },
  channels: [process.env.CHANNEL_NAME]  // Channel to join
});

// Connect the bot to Twitch
client.connect()
  .then(() => {
    console.log("Daeski079 bot connected on foe nem!");
  })
  .catch(console.error);

// Predefined messages to rotate in chat
const messages = [
  "Shoutout to Daeski going crazi 🔥",
  "Live with Daeski079 — tap in on foe nem!",
  "lOCK iN GANG 💯",
  "MAJOR MOTION every stream with Daeski079 ✨"
  "wya folks?",
  "im trying to see some azz",
  "cap alert 🔥",
  "i dont know why mfks even come on here frfr!"
];

// Function to send a random message every 5 minutes
function sendMessage() {
  const msg = messages[Math.floor(Math.random() * messages.length)];
  client.say("daeski079", msg);
}

// Set interval: every 5 minutes (300000 ms)
setInterval(sendMessage, 5 * 60 * 1000);

// Respond to a manual !hype command
client.on('message', (channel, tags, message, self) => {
  if (self) return;  // Ignore messages from the bot itself

  if (message.toLowerCase() === '!hype') {
    client.say(channel, "LET’S GO 🔥 on foe nem");
  }
});
