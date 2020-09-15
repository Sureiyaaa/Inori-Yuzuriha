const Discord = require("discord.js")
const active = new Map();
const talkedRecently = new Set();
const settings = require("../storage/settings.json");
const client = new Discord.Client();
const color = require("../storage/settings.json")
const defaultSettings = {
  prefix: "iy>",
  welcomeChannel: "None Set",
  rolelog: "None Set",
  moderationChannel: "None Set",
  messageLogs: "None Set",
  welcomeMessage: "**Welcome to {{guild}}, {{user}}! You are the {{count}}th User**"
}
module.exports = async (message) => {
  const { client } = message;
  if (message.author.bot) return;
  
    client.settings.ensure(message.guild.id, defaultSettings);
    let gp = client.settings.get(message.guild.id, "prefix")   
    let ops = {
      active: active
    }
    if(message.content.toUpperCase().includes("467641216499056660")){
      message.channel.send(`${message.author.username}-sama my prefix is **${gp}**`);
    } else if(message.content.toUpperCase().includes('I LOVE YOU 467641216499056660')) {
      message.channel.send(`I love you too ${message.author}`);
    } else if(message.author.id === "341577240934613004"){
      if(message.content.toUpperCase().includes('SPANK')) {
        message.channel.send(`Sureiya-sama spank me please!`);
      }
    } 
    if (message.content.indexOf(client.settings.get(message.guild.id, "prefix")) !== 0) return;
    const params = message.content.split(" ").slice(1);
    const perms = client.elevation(message);

    const args = message.content.slice(client.settings.get(message.guild.id, "prefix").length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    let cmd;
 
    if (client.commands.has(command)) {
      cmd = client.commands.get(command);
    } else if (client.aliases.has(command)) {
      cmd = client.commands.get(client.aliases.get(command));
    }
  
    if (cmd) {
      if (perms < cmd.conf.permLevel) {
        return message.author.send(["ERROR: Permission denied"]);
    } 
       if (talkedRecently.has(message.author.id)) {
               message.delete() 
        let cdembed = new Discord.RichEmbed()
            .setDescription(`${message.author.username}-san Commands Cooldown 2 Seconds`)
            .setColor(color.inori)
        return message.channel.send(cdembed).then(msg => {msg.delete(3000)});
    } else {

        cmd.run(client, message, args, ops, perms);

        console.log(`[${new Date().toLocaleString()}] CMD RUN: ${message.author.tag} (${message.author.id}) used command: ${cmd.help.name}`);
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 2000);
    }
    }
  
};