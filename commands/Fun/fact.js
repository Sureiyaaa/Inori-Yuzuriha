const superagent = require("snekfetch");
const Discord = require("discord.js");
const color = require("../../storage/settings.json")
exports.run = async (client, message, args) => {
    superagent.get('https://nekos.life/api/v2/fact')
        .end((err, response) => {
      const pussyembed = new Discord.RichEmbed()
      .setDescription(response.body.fact)
      .setColor(color.inori)
  message.channel.send(pussyembed);
    })
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["fact"],
  permLevel: 0,
};

exports.help = {
  name: "fact",
  description: "Fact Message.",
  usage: "fact",
};
