const Discord = require('discord.js');
const randomPuppy = require('random-puppy');
const color = require("../../storage/settings.json")
exports.run = (client, message, args) => {
    randomPuppy('awwnime')
    .then(url => {
        const embed = new Discord.RichEmbed()
        .setImage(url)
        .setColor(color.inori)
     return message.channel.send({ embed });
})
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["m"],
  permLevel: 0,
};

exports.help = {
  name: "moe",
  description: "Moe Pictures.",
  usage: "moe",
};
