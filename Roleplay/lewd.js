const Discord = require('discord.js')
const snekfetch = require("snekfetch");
const color = require("../../storage/settings.json")
const { disgustP, gropeP } = require('../../assets/json/actions.json');
exports.run = async (client, message, args) => {
      if (!message.channel.nsfw) return message.channel.send('You can use this commands on NSFW Channel!')
      var recipient = message.content.split(/\s+/g).slice(1).join(" ");
        var disgust = disgustP[Math.round(Math.random() * (disgustP.length - 1))];
        var grope = gropeP[Math.round(Math.random() * (gropeP.length - 1))];

        if (!recipient) {

                        var res = await snekfetch.get(`https://rra.ram.moe/i/r?type=lewd`);
            var body = JSON.parse(res.text)
                        var embed = new Discord.RichEmbed()
                .setDescription(`${message.author} Starts Lewding.`)
                .setColor(color.inori)
                .setImage(`https://rra.ram.moe${body.path}`);
            return message.channel.send(embed);

        } else if (message.mentions.users.first() == message.author) {
                      var res = await snekfetch.get(`https://rra.ram.moe/i/r?type=lewd`);
            var body = JSON.parse(res.text);
            var embed = new Discord.RichEmbed()
                .setDescription(`${message.author} Starts Lewding.`)
                .setColor(color.inori)
                .setImage(`https://rra.ram.moe${body.path}`);
            return message.channel.send(embed);

        } else if (message.mentions.users.first() == client.user) {
                      var res = await snekfetch.get(`https://rra.ram.moe/i/r?type=lewd`);
            var body = JSON.parse(res.text);
            const embed = new Discord.RichEmbed()
                .setTitle(`Don't.. Lewd me!!!`)
                .setColor(color.inori)
                .setImage(`https://rra.ram.moe${body.path}`);
            return message.channel.send(embed);

        } else {
            var res = await snekfetch.get(`https://rra.ram.moe/i/r?type=lewd`);
            var body = JSON.parse(res.text);
            var embed = new Discord.RichEmbed()
                .setDescription(`${message.author} has started... lewding ${recipient}?`)
                .setColor(color.inori)
                .setImage(`https://rra.ram.moe${body.path}`);
            return message.channel.send(embed);
        }
    }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["lewd"],
  permLevel: 0,
};

exports.help = {
  name: "lewd",
  description: "Roleplay Lewd.",
  usage: "lewd <@user>",
};