const Discord = require('discord.js')
const superagent = require("superagent");
const color = require("../../storage/settings.json")
exports.run = async (client, message, args) => {  
 
    let hugUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!hugUser) return message.channel.send("Mention Someone you Want to Hug!");

    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/hug`);

    let hugEmbed = new Discord.RichEmbed()
    .setTitle("Hug!!")
    .setDescription(`**${message.author.username}** hugged **${message.mentions.users.first().username}**!`)
    .setImage(body.url)
    .setColor(color.inori)

    message.channel.send(hugEmbed)


}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["hug"],
  permLevel: 0,
};

exports.help = {
  name: "hug",
  description: "Roleplay Hug.",
  usage: "hug",
};