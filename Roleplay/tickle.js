const nekos = require('nekos.life');
const neko = new nekos();
const Discord = require("discord.js");
const color = require("../../storage/settings.json")
exports.run = async (client, message, args) => {

let user = message.mentions.users.first()
if(message.mentions.users.size < 1) return message.reply('You need to mention somebody to give a Tickle!')
if(user.id == message.author.id) return message.reply('You are Crazy.')
let { url } = await neko.sfw.tickle();
let kiss1 = new Discord.RichEmbed()
  .setDescription(`${message.author} Tickled ${user}`)
  .setColor(color.inori)
  .setImage(url)
message.channel.send(kiss1);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["tickle"],
  permLevel: 0,
};

exports.help = {
  name: "tickle",
  description: "Roleplay Tickle.",
  usage: "tickle <@user>",
};
