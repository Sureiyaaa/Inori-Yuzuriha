const Discord = require("discord.js");
const color = require("../../storage/settings.json")
exports.run = async (bot, message, args) => {
    const voiceChannel = message.member.voiceChannel;
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!voiceChannel) return message.channel.send('``You must be in a Voice Channel BAKA!``').then(msg => {msg.delete(30000)});
    if (serverQueue.loop) {
      let unloopEmbed = new Discord.RichEmbed()
      .setDescription("**Playlist Unlooped**")
      .setColor(color.inori)
      serverQueue.loop = false;
      return message.channel.send(unloopEmbed);
    } else {
      let loopEmbed = new Discord.RichEmbed()
      .setDescription("**Playlist Looped**")
      .setColor(color.inori)
      serverQueue.loop = true;
      return message.channel.send(loopEmbed);
    }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["repeat"],
  permLevel: 0,
};

exports.help = {
  name: "loop",
  description: "Loop Current Song.",
  usage: "loop",
};
