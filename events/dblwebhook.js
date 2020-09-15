const Discord = require("discord.js")
const config = require("../storage/settings.json");
const db = require("quick.db")
const DBL = require('dblapi.js');
const express = require('express');
const http = require('http');
const color = require("../storage/settings.json")
const app = express();
const server = http.createServer(app);
const dbl = new DBL(config.DBLTOKEN, { webhookPort: 3000, webhookAuth: 'xptaker45', webhookServer: server });
let amount = 5000
dbl.webhook.on('ready', hook => {
      console.log(`[${new Date().toLocaleString()}] Webhook Running > http://${hook.hostname}:${hook.port}${hook.path}`);
});

module.exports = async(client, message, guild) => {

dbl.webhook.on('vote', vote => {
      console.log(`User with ID ${vote.user.tag} just voted!`);
      let embedd = new Discord.RichEmbed()
      .setTitle("**Thank you very much for voting!**")
      .setColor(color.inori)
      .setDescription("As a reward, You have received **¥1000** and Receive **1** Reset Token.")
      .setFooter(`Use Reset Tokens to reset Service and Work Command.`)

       let embeddd = new Discord.RichEmbed()
      .setColor(color.inori)
      .setDescription(`
        **<:yikez_inori:631487862000582695> New Vote!\n
        User with ID ${vote.user} just voted! Received ¥1000 and 1 Reset Token**`)
      .setFooter(`Inori Yuzuriha | Thank you very much!.`, client.user.avatarURL)
    client.users.get(vote.user).send(embedd);

    client.channels.get(`628241464253480962`).send(embeddd)

let targetBalance = db.get(`userBalance_${vote.user}`);
  db.add(`userBalance_${vote.user}`, amount);
  db.add(`userReset_${vote.user}`, 1);
});


dbl.on('error', e => {
console.log(`Oops! ${e}`);
})

server.listen(5000, () => {
  console.log(`[${new Date().toLocaleString()}] Inori > Listening`);
});

setInterval(() => {
  dbl.postStats(client.guilds.size);
  console.log(`[${new Date().toLocaleString()}] Inori > Discord Bot List Server Posted`);
}, 180000);

};