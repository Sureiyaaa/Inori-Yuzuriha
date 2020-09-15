const superagent = require("snekfetch");
const Discord = require('discord.js')
const color = require("../../storage/settings.json")
exports.run = async (client, message, args) => {  
    if (!message.channel.nsfw) return message.channel.send('You can use this commands on NSFW Channel!')
    superagent.get('https://nekos.life/api/v2/img/lewd')
        .end((err, response) => {
      const lewdembed = new Discord.RichEmbed()
      .setImage(response.body.url)
      .setColor(color.inori)
  message.channel.send(lewdembed);
    })
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["lewdneko"],
  permLevel: 0,
};

exports.help = {
  name: "lewdneko",
  description: "NSFW Lewd Neko.",
  usage: "lewdneko",
};