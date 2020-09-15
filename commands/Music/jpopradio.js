const Discord = require("discord.js")
const color = require("../../storage/settings.json")
exports.run = (bot, message, args) => {
      if (message.member.voiceChannel) {
        message.member.voiceChannel.join()
          .then(connection => {
            let embed = new Discord.RichEmbed()
            .setDescription('**Connected!** Playing listen.moe JPOP')
            .setFooter("Credits listen.moe")
            .setColor(color.inori)
            connection.playArbitraryInput(`https://listen.moe/opus`);
            message.channel.send(embed);
          })
          .catch(console.log);
      } else {
        message.reply('You are not in a voice channel!');
      }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["jpradio"],
  permLevel: 0,
};

exports.help = {
  name: "jpopradio",
  description: "Japanese Radio.",
  usage: "jpradio",
};