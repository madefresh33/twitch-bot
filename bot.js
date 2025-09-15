const tmi = require("tmi.js"); 

// --- LIST OF BOT ACCOUNTS (8 bots) ---
const bots = [
  { username: process.env.BOT1_USERNAME, token: process.env.BOT1_TOKEN },
  { username: process.env.BOT2_USERNAME, token: process.env.BOT2_TOKEN },
  { username: process.env.BOT3_USERNAME, token: process.env.BOT3_TOKEN },
  { username: process.env.BOT4_USERNAME, token: process.env.BOT4_TOKEN },
  { username: process.env.BOT5_USERNAME, token: process.env.BOT5_TOKEN },
  { username: process.env.BOT6_USERNAME, token: process.env.BOT6_TOKEN },
  { username: process.env.BOT7_USERNAME, token: process.env.BOT7_TOKEN },
  { username: process.env.BOT8_USERNAME, token: process.env.BOT8_TOKEN }
];

// --- CHANNEL TO JOIN ---
const channel = process.env.CHANNEL_NAME;

// --- MESSAGES TO ROTATE (No fake usernames) ---
const chatMessages = [
  "Daeski a GOAT fr fr 🔥",
  "Whole city watching this man! 🏆",
  "On foe nem, that’s facts!",
  "bro crazy asl🙃",
  "We outsideee? 🚀",
  "gift me please 💯",
  "bro funny as hell 😂",
  "This stream lit🔥🔥🔥",
  "keep up the good work!",
  "cashapp me 🔥",
  "mfks look dirty asl🙃",
  "lOCK iN GANG 💯",
  "MAJOR MOTION wit Daeski079 ✨",
  "wya folks?",
  "im trying to see some azz",
  "cap alert 🔥",
  "i dont know why mfks even come on here frfr!",
  "didnt i see you on chicago mugshots?",
  "Can I PULL UP BRO?",
  "aRE U STILL GIVING MONEY AWAY?!",
  "I SUBBED LIKE I PROMISED"
];

// --- FUNCTION TO START A SINGLE BOT ---
function startBot(botConfig) {
  const client = new tmi.Client({
    options: { debug: true },
    connection: { reconnect: true, secure: true },
    identity: {
      username: botConfig.username,
      password: botConfig.token
    },
    channels: [channel]
  });

  client.connect()
    .then(() => console.log(`${botConfig.username} connected on foe nem!`))
    .catch(console.error);

  // --- RANDOM AUTO-MESSAGES (15–60 sec) ---
  function sendRandomMessage() {
    const msg = chatMessages[Math.floor(Math.random() * chatMessages.length)];
    client.say(channel, msg);

    // Schedule next message randomly between 15–60 seconds
    const nextInterval = Math.floor(Math.random() * (60000 - 15000) + 15000);
    setTimeout(sendRandomMessage, nextInterval);
  }

  // Start sending messages
  sendRandomMessage();

  // --- VIEWER COMMANDS ---
  client.on("message", (chan, tags, message, self) => {
    if (self) return; // ignore messages from the bot itself

    const msg = message.toLowerCase();

    if (msg === "hey") {
      client.say(chan, `Yo ${tags.username}, what up friend?`);
    }

    if (msg === "!daeski") {
      client.say(chan, "im a day 1 gang gift me💯");
    }

    if (msg === "lol") {
      client.say(chan, "What i miss?");
    }

    if (msg === "ofn") {
      client.say(chan, "LET’S GO!!!!!!!!!");
    }

    if (msg === "yooo") {
      client.say(chan, "😂😂😂");
    }
  });
}

// --- START ALL BOTS ---
bots.forEach(bot => startBot(bot));
