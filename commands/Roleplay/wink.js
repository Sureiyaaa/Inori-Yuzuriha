const Discord = require('discord.js')
const snekfetch = require('snekfetch');
const { winkP } = require('../../assets/json/actions.json');
const color = require("../../storage/settings.json")
exports.run = async (client, message, args) => {  
       var recipient = message.content.split(/\s+/g).slice(1).join(" ");
        var wink = winkP[Math.round(Math.random() * (winkP.length - 1))]

        if (!recipient) {
            const embed = new Discord.RichEmbed()
                .setDescription(`**You can't wink at yourself, but I'll wink at.. you,** ${message.author}! uWu.`)
                .setColor(color.inori)
                .setImage(wink);
            return message.channel.send(embed);

        } else if (message.mentions.users.first() == message.author) {
            const embed = new Discord.RichEmbed()
                .setDescription(`**You can't wink at yourself, but I'll wink at.. you,** ${message.author}! uWu.`)
                .setColor(color.inori)
                .setImage(wink);
            return message.channel.send(embed);
                
        } else if (message.mentions.users.first() == client.user) {
            const embed = new Discord.RichEmbed()
                .setDescription(`**Y-Yes?** (- ^ *)`,)
                .setColor(color.inori)
                .setImage(wink);
            return message.channel.send(embed);

        } else {
            const embed = new Discord.RichEmbed()
                .setDescription(`${message.author} **winks** ${recipient}!`)
                .setColor(color.inori)
                .setImage(wink);
            return message.channel.send(embed);
        }

    }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["wink"],
  permLevel: 0,
};

exports.help = {
  name: "wink",
  description: "Roleplay Wink.",
  usage: "wink <@user>",
};