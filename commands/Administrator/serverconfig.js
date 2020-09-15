const Discord = require('discord.js');
const client = new Discord.Client();

const defaultSettings = {
  prefix: "iy>",
  welcomeChannel: "None Set",
  rolelog: "None Set",
  moderationChannel: "None Set",
  messageLogs: "None Set",
  welcomeMessage: "**Welcome to {{guild}}, {{user}}! You are the {{count}}th User**"
}
exports.run = async (client, message, args) => {
  const guildConf = client.settings.ensure(message.guild.id, defaultSettings);
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You are not an Admin.");
    let configProps = Object.keys(guildConf).map(prop => {
      return `${prop}  :  ${guildConf[prop]}\n\n`;
    });
    message.channel.send(`**${message.guild.name}** Configuration:
    \`\`\`${configProps}\`\`\``);
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["serverconfig", "servConfig", "servconfig"],
};

exports.help = {
  name: "serverConfig",
  description: "Server Config",
  usage: "serverConfig",
};