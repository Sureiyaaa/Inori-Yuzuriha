const Discord = require('discord.js');
exports.run = async (client, message, args) => {
  
message.channel.send(message.author.toString() + "-san Yes? uWu.");
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["notice"],
  permLevel: 0,
};

exports.help = {
  name: "notice",
  description: "Make Inori Notice you.",
  usage: "notice",
};