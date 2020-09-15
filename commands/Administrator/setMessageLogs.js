const Discord = require('discord.js');
const client = new Discord.Client();
const color = require("../../storage/settings.json")

const defaultSettings = {
  prefix: "iy>",
  welcomeChannel: "None Set",
  rolelog: "None Set",
  moderationChannel: "None Set",
  messageLogs: "None Set",
  welcomeMessage: "**Welcome to {{guild}}, {{user}}! You are the {{count}}th User**"
}

exports.run = async (client, message, args) => {  
  
  if(isNaN(args[0])) return message.channel.send("**The Value Must be Channel ID!**")
  if(!args[0]) return message.channel.send("**Please Provide a Value**");
  const guildConf = client.settings.ensure(message.guild.id, defaultSettings);
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You are not an Admin.");
  const [...value] = args;
      let botembed = new Discord.RichEmbed()

        .setTitle("Set Config")
        .setDescription(`Guild configuration **Message Logs** has been set to:\n\`${value.join(" ")}\``)
        .setColor(color.inori)
        .setTimestamp()
  client.settings.set(message.guild.id, value.join(" "), "messageLogs");
  message.channel.send(botembed);
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sml", "sML"],
};

exports.help = {
  name: "setmessagelogs",
  description: "Set Message Logs",
  usage: "setMessageLogs [ChannelID]",
};