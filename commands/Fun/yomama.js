const Discord = require("discord.js");
const yoMamma = require('yo-mamma').default;
const color = require("../../storage/settings.json")
module.exports.run = async (client, message, args) => {
   let insult = yoMamma();
   let embed = new Discord.RichEmbed()
   .setDescription(insult)
   .setColor(color.inori)
    message.channel.send(embed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yomama"],
  permLevel: 0,
};

exports.help = {
  name: "yomama",
  description: "Yomama.",
  usage: "yomama",
};