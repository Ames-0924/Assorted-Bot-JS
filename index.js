const Discord = require("discord.js")
const client = new Discord.Client()

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", msg => {
  if (msg.content === "ping") {
    msg.reply("pong");
  }
})

client.login(process.env."ODQ2NjQ1OTU4NDE3NzExMTM1.YKyifg.t1uYD4UU6RvFp5x4VHOIDdwL9jM")
