const Discord = require('discord.js')
const superagent = require("snekfetch");
const color = require("../../storage/settings.json")
const { disgustP, gropeP } = require('../../assets/json/actions.json');
exports.run = async (client, message, args) => {
      var recipient = message.content.split(/\s+/g).slice(1).join(" ");
        var disgust = disgustP[Math.round(Math.random() * (disgustP.length - 1))];
        var grope = gropeP[Math.round(Math.random() * (gropeP.length - 1))];

        if (!recipient) {
            var embed = new Discord.RichEmbed()
                .setDescription(`${message.author} Starts Groping.`)
                .setColor(color.inori)
                .setImage(disgust);
            return message.channel.send(embed);

        } else if (message.mentions.users.first() == message.author) {
            var embed = new Discord.RichEmbed()
                .setDescription(`${message.author} Starts Groping.`)
                .setColor(color.inori)
                .setImage(disgust);
            return message.channel.send(embed);

        } else if (message.mentions.users.first() == client.user) {
            const embed = new Discord.RichEmbed()
                .setTitle(`Don't.. Grope me!!!`)
                .setColor(color.inori)
                .setImage(grope);
            return message.channel.send(embed);

        } else {
            var embed = new Discord.RichEmbed()
                .setDescription(`${message.author} has started... groping ${recipient}?`)
                .setColor(color.inori)
                .setImage(grope);
            return message.channel.send(embed);
        }
    }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["grope"],
  permLevel: 0,
};

exports.help = {
  name: "grope",
  description: "Roleplay Grope.",
  usage: "grope <@user>",
};