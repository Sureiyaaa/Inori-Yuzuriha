const Discord = require('discord.js');
const randomPuppy = require('random-puppy')
const color = require("../../storage/settings.json")
exports.run = async (client, message, args) => {
  if (!message.channel.nsfw) return message.channel.send('You can use this commands on NSFW Channel!')
     if(message.author.bot) return;
  if(message.channel.type !== "text") return;
  randomPuppy('HENTAI_GIF')
            .then(url => {
                const embed = new Discord.RichEmbed()
                .setTimestamp(new Date())
                .setImage(url)
                .setColor(color.inori)
    return message.channel.send({ embed });
            })
  
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["hentaigif"],
  permLevel: 0,
};

exports.help = {
  name: "hentaigif",
  description: "NSFW Hentai GIF.",
  usage: "hentaigif",
};
