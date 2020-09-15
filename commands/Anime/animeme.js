const Discord = require('discord.js');
const randomPuppy = require('random-puppy')
const color = require("../../storage/settings.json")
exports.run = async (client, message, args) => {
     if(message.author.bot) return;
  if(message.channel.type !== "text") return;
  randomPuppy('animemes')
            .then(url => {
                const embed = new Discord.RichEmbed()
                .setTimestamp(new Date())
                .setTitle(`Anime Meme`)
                .setImage(url)
                .setColor(color.inori)
    return message.channel.send({ embed });
            })
  
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ameme"],
  permLevel: 0,
};

exports.help = {
  name: "animeme",
  description: "Anime Meme.",
  usage: "animeme",
};