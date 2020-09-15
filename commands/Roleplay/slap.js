const Discord = require('discord.js')
const snekfetch = require('snekfetch');
const { slapP } = require('../../assets/json/actions.json');
const color = require("../../storage/settings.json")
exports.run = async (client, message, args) => {  
       var recipient = message.content.split(/\s+/g).slice(1).join(" ");

        if (!recipient) {
            const embed = new Discord.RichEmbed()
                .setDescription(`**You can't slap yourself, but I'll slap you instead,** ${message.author}!`)
                .setColor(color.inori)
                .setImage(slapP[Math.round(Math.random() * (slapP.length - 1))]);
            return message.channel.send(embed);

        } else if (message.mentions.users.first() == message.author) {
            const embed = new Discord.RichEmbed()
                .setDescription(`**You can't slap yourself, but I'll slap you instead,** ${message.author}!`)
                .setColor(color.inori)
                .setImage(slapP[Math.round(Math.random() * (slapP.length - 1))]);
            return message.channel.send(embed);
                
        } else if (message.mentions.users.first() == client.user) {
            const embed = new Discord.RichEmbed()
                .setDescription(`**Ouchieee!!** T_T`,)
                .setColor(color.inori)
                .setImage(slapP[Math.round(Math.random() * (slapP.length - 1))]);
            return message.channel.send(embed);

        } else {
            const embed = new Discord.RichEmbed()
                .setDescription(`${message.author} **Slaps** ${recipient}!`)
                .setColor(color.inori)
                .setImage(slapP[Math.round(Math.random() * (slapP.length - 1))]);
            return message.channel.send(embed);
        }

    }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["slap"],
  permLevel: 0,
};

exports.help = {
  name: "slap",
  description: "Roleplay Skao.",
  usage: "slap <@user>",
};