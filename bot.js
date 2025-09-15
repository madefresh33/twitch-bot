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
const chatters = [
  { name: "onfoenem23", lines: [
      "Daeski the GOAT fr fr 🔥",
      "Whole city watching this man 🏆",
      "On foe nem, that’s facts!"
  ]},
  { name: "shortyFrom79th", lines: [
      "Aye this beat crazy 🎶",
      "We outsideee 🚀",
      "Daeski got Chicago turnt 💯"
  ]},
  { name: "madetowatch", lines: [
      "Bro funny as hell 😂",
      "This stream littyyyy 🔥🔥🔥",
      "Tell ‘em Daeski!"
  ]}
];
function randomChatter() {
  const chatter = chatters[Math.floor(Math.random() * chatters.length)];
  const line = chatter.lines[Math.floor(Math.random() * chatter.lines.length)];

  client.say(process.env.CHANNEL_NAME, `${chatter.name}: ${line}`);
}
// Every 2–5 minutes, a random chatter speaks
setInterval(randomChatter, Math.floor(Math.random() * (300000 - 120000)) + 120000);

