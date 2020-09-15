const superagent = require("snekfetch");
const Discord = require('discord.js')
const color = require("../../storage/settings.json")
exports.run = async (client, message, args) => {  

    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/neko`);

    let wEmbed = new Discord.RichEmbed()
    .setImage(body.url)
    .setColor(color.inori)

    message.channel.send(wEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["n"],
  permLevel: 0,
};

exports.help = {
  name: "neko",
  description: "Neko Pictures.",
  usage: "neko",
};