const Discord = require("discord.js");
const superagent = require("superagent");
const color = require("../../storage/settings.json")
exports.run = async (client, message, args) => {
    let hugUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!hugUser) return message.channel.send("Mention Someone you Want to Pat!");

    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/pat`);

    let patEmbed = new Discord.RichEmbed()
    .setDescription(`**${message.author.username}** patted **${message.mentions.users.first().username}**!`)
    .setImage(body.url)
    .setColor(color.inori)
    message.channel.send(patEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["pat"],
  permLevel: 0,
};

exports.help = {
  name: "pat",
  description: "Roleplay Pat.",
  usage: "pat <@user>",
};