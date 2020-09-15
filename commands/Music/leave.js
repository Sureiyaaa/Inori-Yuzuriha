const Discord = require("discord.js");
const color = require("../../storage/settings.json")
exports.run = async (client, message, args) => {
      if (message.member.voiceChannel) {
        message.member.voiceChannel.leave()
        let embed = new Discord.RichEmbed()
        .setDescription('Left Voice Channel.')
        .setColor(color.inori)
      message.channel.send(embed);
    };
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["l"],
  permLevel: 0,
};

exports.help = {
  name: "leave",
  description: "Leave in the User's Voice Channel.",
  usage: "leave",
};