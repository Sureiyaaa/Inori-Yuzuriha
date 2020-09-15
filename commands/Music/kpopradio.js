const Discord = require("discord.js")
const color = require("../../storage/settings.json")
exports.run = (bot, message, args) => {
      if (message.member.voiceChannel) {
        message.member.voiceChannel.join()
          .then(connection => {
            let embed = new Discord.RichEmbed()
            .setDescription('**Connected!** Playing listen.moe KPOP.')
            .setFooter("Credits qtradio")
            .setColor(color.inori)
            connection.playArbitraryInput(`https://listen.moe/kpop/opus`);
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
  aliases: ["kradio"],
  permLevel: 0,
};

exports.help = {
  name: "kpopradio",
  description: "Korean pop Radio.",
  usage: "kradio",
};