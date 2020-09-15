const Discord = require('discord.js')
const snekfetch = require("snekfetch");
const { disgustP } = require('../../assets/json/actions.json');
const color = require("../../storage/settings.json")
exports.run = async (client, message, args) => {  
       var recipient = message.content.split(/\s+/g).slice(1).join(" ");
      var disgust = disgustP[Math.round(Math.random() * (disgustP.length - 1))];

        if (args.length < 1) {
            var embed = new Discord.RichEmbed()
                .setDescription(`${message.author} Started noming.`)
                .setColor(color.inori)
                .setImage(disgust)
            return message.channel.send(embed)

        } else if (message.mentions.users.first() == message.author) {
            var embed = new Discord.RichEmbed()
                .setDescription(`${message.author.username} Started noming.`)
                .setColor(color.inori)
                .setImage(disgust)
            return message.channel.send(embed)

        } else if (message.mentions.users.first() == client.user) {

            var text = await snekfetch.get(`https://rra.ram.moe/i/r?type=nom`);
            var body = JSON.parse(text.text);

            var embed = new Discord.RichEmbed()
                .setDescription(`Nooo!!!~ ${message.author.username}-senpai.. `)
                .setColor(color.inori)
                .setImage(`https://rra.ram.moe${body.path}`)
            return message.channel.send(embed)

        } else {

            var text = await snekfetch.get(`https://rra.ram.moe/i/r?type=nom`);
            var body = JSON.parse(text.text);

            var embed = new Discord.RichEmbed()
                .setDescription(`${message.author} noms on ${recipient}!`)
                .setColor(color.inori)
                .setImage(`https://rra.ram.moe${body.path}`)
            return message.channel.send(embed)
        }
    }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["bite"],
  permLevel: 0,
};

exports.help = {
  name: "nom",
  description: "Roleplay Nom/Bite.",
  usage: "nom <@user>",
};