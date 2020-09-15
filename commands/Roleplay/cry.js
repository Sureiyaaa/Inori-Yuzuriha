const Discord = require('discord.js')
const snekfetch = require('snekfetch');
const { cryP } = require('../../assets/json/actions.json');
const color = require("../../storage/settings.json")
exports.run = async (client, message, args) => {  
      const embed = new Discord.RichEmbed()
      		.setDescription(`${message.author} has started crying!`)
            .setColor(color.inori)
            .setImage(cryP[Math.round(Math.random() * (cryP.length - 1))]);
        return message.channel.send({ embed: embed });

    }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["cry"],
  permLevel: 0,
};

exports.help = {
  name: "cry",
  description: "Roleplay Cry.",
  usage: "cry",
};