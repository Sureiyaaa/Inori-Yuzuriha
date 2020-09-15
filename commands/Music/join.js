const Discord = require("discord.js");
const color = require("../../storage/settings.json")
exports.run = async (client, message, args) => {
      if (message.member.voiceChannel) {
        message.member.voiceChannel.join()
        let embed = new Discord.RichEmbed()
        .setDescription('Joined Voice Channel.')
        .setColor(color.inori)
      message.channel.send(embed);
      }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["j"],
  permLevel: 0,
};

exports.help = {
  name: "join",
  description: "Join in the User's Voice Channel.",
  usage: "join",
};