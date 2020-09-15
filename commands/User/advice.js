const Discord = require("discord.js");
const request = require('request');
const color = require("../../storage/settings.json")
exports.run = async (client, message, args) => {

    let cn = request("http://api.adviceslip.com/advice", function(err, res, body) {
        try {
            let cnj = JSON.parse(body)
            let embed = new Discord.RichEmbed()
            .setDescription(cnj.slip.advice)
            .setColor(color.inori)
            message.channel.send(embed)
        } catch (e) {
            return message.channel.send("**Advice machine :b:roke**")
        }
    });
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["advice"],
  permLevel: 0,
};

exports.help = {
  name: "advice",
  description: "Advice Message.",
  usage: "advice",
};