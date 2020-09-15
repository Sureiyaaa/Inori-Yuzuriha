const Discord = require('discord.js')
const snekfetch = require('snekfetch');
const color = require("../../storage/settings.json")

exports.run = async (client, message, args) => {  
      var text = await snekfetch.get(`https://rra.ram.moe/i/r?type=owo`);
        var body = JSON.parse(text.text);

        var embed = new Discord.RichEmbed()
            .setColor(color.inori)
            .setImage(`https://rra.ram.moe${body.path}`);
        return message.channel.send({ embed });

    }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["owo"],
  permLevel: 0,
};

exports.help = {
  name: "owo",
  description: "OwO Image",
  usage: "owo",
};