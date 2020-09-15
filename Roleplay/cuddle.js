const nekos = require('nekos.life');
const neko = new nekos();
const Discord = require("discord.js");
const color = require("../../storage/settings.json")
exports.run = async (client, message, args) => {  
let user = message.mentions.users.first()
if(message.mentions.users.size < 1) return message.reply('You need to mention somebody to give a warm Cuddle, silly!')
if(user.id == message.author.id) return message.reply('you cannot cuddle yourself baka!')
let { url } = await neko.sfw.cuddle();
let kiss1 = new Discord.RichEmbed()
  .setDescription(`${message.author} cuddled ${user}`)
  .setColor(color.inori)
  .setImage(url)
message.channel.send(kiss1);
} 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["cuddle"],
  permLevel: 0,
};

exports.help = {
  name: "cuddle",
  description: "Roleplay Cuddle.",
  usage: "cuddle <@user>",
};