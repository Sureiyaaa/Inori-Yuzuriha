const superagent = require("snekfetch");
const Discord = require("discord.js");
const color = require("../../storage/settings.json")
exports.run = async (client, message, args) => {
    superagent.get('https://nekos.life/api/v2/why')
        .end((err, response) => {
      const pussyembed = new Discord.RichEmbed()
      .setDescription(response.body.why)
      .setColor(color.inori)
  message.channel.send(pussyembed);
    })
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["why"],
  permLevel: 0,
};

exports.help = {
  name: "why",
  description: "Why Message.",
  usage: "why",
};
