const superagent = require("snekfetch");
const Discord = require('discord.js')
const color = require("../../storage/settings.json")
exports.run = async (client, message, args) => {  
    
    let {body} = await superagent
    .get(`https://nekos.life/api/v2/img/Random_hentai_gif`);
    if (!message.channel.nsfw) return message.reply(" You must be in a N.S.F.W channel to use this command.");
  
    let hentaiEmbed = new Discord.RichEmbed()
    .setImage(body.url)
    .setColor(color.inori)
    message.channel.send(hentaiEmbed);

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["perv"],
  permLevel: 0,
};

exports.help = {
  name: "hentai",
  description: "NSFW Hentai.",
  usage: "hentai",
};