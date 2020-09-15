const Discord = require('discord.js')
const snekfetch = require('snekfetch');
const { disgustP } = require('../../assets/json/actions.json');
const color = require("../../storage/settings.json")
exports.run = async (client, message, args) => {  
      var recipient = message.content.split(/\s+/g).slice(1).join(" ");
        var disgust = disgustP[Math.round(Math.random() * (disgustP.length - 1))];

        if (!recipient) {
            var embed = new Discord.RichEmbed()
                .setDescription(`${message.author} started licking.`)
                .setColor(color.inori)
                .setImage(disgust);
            return message.channel.send(embed);

        } else if (message.mentions.users.first() == message.author) {
            var embed = new Discord.RichEmbed()
                .setDescription(`${message.author} started licking.`)
                .setColor(color.inori)
                .setImage(disgust);
            return message.channel.send(embed);

        } else if (message.mentions.users.first() == client.user) {

            var res = await snekfetch.get(`https://rra.ram.moe/i/r?type=lick`);
            var body = JSON.parse(res.text);

            var embed = new Discord.RichEmbed()
                .setDescription(`What the... >///< why are you...licking me...`)
                .setColor(color.inori)
                .setImage(`https://rra.ram.moe${body.path}`);
            return message.channel.send(embed);

        } else {

            var res = await snekfetch.get(`https://rra.ram.moe/i/r?type=lick`);
            var body = JSON.parse(res.text);

            var embed = new Discord.RichEmbed()
                .setDescription(`${message.author} licks ${recipient}!`)
                .setColor(color.inori)
                .setImage(`https://rra.ram.moe${body.path}`);
            return message.channel.send(embed);
        }
    }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["lick"],
  permLevel: 0,
};

exports.help = {
  name: "lick",
  description: "Roleplay Lick.",
  usage: "lick <@user>",
};