const config = require("../storage/settings.json");
const fs = require("fs");
const Enmap = require('enmap');
const Discord = require("discord.js")
const db = require("quick.db")
const DBL = require('dblapi.js');
const express = require('express');
const http = require('http');
const color = require("../storage/settings.json")
const app = express();
const server = http.createServer(app);
const dbl = new DBL(config.DBLTOKEN, { webhookPort: 5000, webhookAuth: 'xptaker45', webhookServer: server });
let amount = 5000
dbl.webhook.on('ready', hook => {
      console.log(`[${new Date().toLocaleString()}] Webhook Running > http://${hook.hostname}:${hook.port}${hook.path}`);
});


dbl.on('error', e => {
console.log(`Oops! ${e}`);
})

server.listen(5000, () => {
console.log(`[${new Date().toLocaleString()}] Inori > Listening`);
});

module.exports = async(client, message, guild) => {
  dbl.webhook.on('vote', vote => {
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
  setInterval(() => {
    dbl.postStats(client.guilds.size);
    console.log(`[${new Date().toLocaleString()}] Inori > Discord Bot List Server Posted`);
    }, 180000);
  let targetBalance = db.get(`userBalance_${vote.user}`);
  db.add(`userBalance_${vote.user}`, amount);
  db.add(`userReset_${vote.user}`, 1);
  });

  console.log(`[${new Date().toLocaleString()}] Inori > Inori Yuzuriha is now online`);

  client.mutes = require("../storage/mutes.json");

  client.setInterval((i, message) => {
    if (i in client.mutes) {
      const { time } = client.mutes[i].time;
      const guildId = client.mutes[i].guild;
      const guild = client.guilds.get(guildId);
      const member = guild.members.get(i);
      const mutedRole = guild.roles.find(
        r => r.name === config.silencedRoleName,
      );
      const defaultRole = message.guild.roles.find(
        r => r.name === config.memberRoleName,
      );
      if (!mutedRole);

      if (Date.now() > time) {
        console.log(`${i} is now able to be unsilenced`);

        member.removeRole(mutedRole);
        member.addRole(defaultRole);
        delete client.mutes[i];

        fs.writeFile(
          "./storage/mutes.json",
          JSON.stringify(client.mutes),
          err => {
            if (err) throw err;
            console.log(`I have unsilenced ${member.user.username}.`);
          },
        );
      }
    }
  }, 5000);

  try {
    const link = await client.generateInvite(["ADMINISTRATOR"]);
    console.log(`[${new Date().toLocaleString()}] Invite link > ${link}`);
  } catch (e) {
    console.log(e.stack);
  }

    console.log(``)
    console.log(`/////////////////////////////////////////////////////////////////`)
    console.log(`//Inori has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} servers.//`);
    console.log(`/////////////////////////////////////////////////////////////////`)
    console.log(``) 
    console.log(`[${new Date().toLocaleString()}] Sureiya-Sama or known as Red King, I am ready to take commands.`)
      setInterval(async () => {
    const statuslist = [
      `Servers | iy>help`,
      `Servers | ${client.guilds.size} servers`,
      `Servers | Prefix (iy>)`,
      `Servers | ${client.channels.size} channels`,
    ];
    const random = Math.floor(Math.random() * statuslist.length);

    try {
      await client.user.setPresence({
        game: {
          name: `${statuslist[random]}`,
          type: "STREAMING",
          url: 'https://www.twitch.tv/sur3iya'
        },
        status: "online"
      });
    } catch (error) {
      console.error(error);
    }
  }, 10000);
  const left = client.channels.find('name', "❖―status―❖")
  let embed = new Discord.RichEmbed()
  .setTitle(":warning:Starting Up")
  .setColor(color.inori)
  .setDescription("**Inori is Starting...**")
  left.send(embed)
};