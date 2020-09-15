const Discord = require('discord.js')
const snekfetch = require("snekfetch");
const color = require("../../storage/settings.json")
const { disgustP, gropeP } = require('../../assets/json/actions.json');
exports.run = async (client, message, args) => {  
      var recipient = message.content.split(/\s+/g).slice(1).join(" ");
        var disgust = disgustP[Math.round(Math.random() * (disgustP.length - 1))];

        if (!recipient) {
            var embed = new Discord.RichEmbed()
                .setDescription(`${message.author} Started Staring.`)
                .setColor(color.inori)
                .setImage(disgust);
            return message.channel.send(embed);

        } else if (message.mentions.users.first() == message.author) {
            var embed = new Discord.RichEmbed()
                .setDescription(`${message.author} Started Staring.`)
                .setColor(color.inori)
                .setImage(disgust);
            return message.channel.send(embed);
        } else if (message.mentions.users.first() == client.user) {
            var res = await snekfetch.get(`https://rra.ram.moe/i/r?type=stare`);
            var body = JSON.parse(res.text);

            var embed = new Discord.RichEmbed()
                .setTitle(`N-Nani?.. (@ ^ @)`)
                .setColor(color.inori)
                .setImage(`https://rra.ram.moe${body.path}`);
            return message.channel.send(embed);
        } else {

            var res = await snekfetch.get(`https://rra.ram.moe/i/r?type=stare`);
            var body = JSON.parse(res.text);

            var embed = new Discord.RichEmbed()
                .setDescription(`${message.author} stares at ${recipient}...`)
                .setColor(color.inori)
                .setImage(`https://rra.ram.moe${body.path}`);
            return message.channel.send(embed);

        }
    }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["stare"],
  permLevel: 0,
};

exports.help = {
  name: "stare",
  description: "Roleplay Stare.",
  usage: "stare <@user>",
};