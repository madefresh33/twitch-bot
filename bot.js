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
// Every minute, a random chatter speaks
setInterval(randomChatter, Math.floor(Math.random() * (300000 - 120000)) + 120000);
let lastChatterIndex = -1;

function randomChatter() {
  let index;
  do {
    index = Math.floor(Math.random() * chatters.length);
  } while(index === lastChatterIndex);

  lastChatterIndex = index;

  const chatter = chatters[index];
  const line = chatter.lines[Math.floor(Math.random() * chatter.lines.length)];

  client.say(process.env.CHANNEL_NAME, `${chatter.name}: ${line}`);
}
client.on("message", (channel, tags, message, self) => {
  if (self) return;

  const msg = message.toLowerCase();

  if (msg === "hello") {
    client.say(channel, `Yo ${tags.username}, what's good on foe nem!`);
  }

  if (msg === "!daeski") {
    client.say(channel, "wtf?🔥");
  }

  if (msg === "!onfoenem") {
    client.say(channel, "yall outside on foe nem 💯");
  }
});
setInterval(randomChatter, 2 * 60 * 1000); // every 2 minutes


