const Discord = require('discord.js')
const color = require("../../storage/settings.json")
exports.run = async (client, message, args) => {
	var serverQueue = message.client.queue.get(message.guild.id);
   
  let noplaying = new Discord.RichEmbed()
						.setDescription("There is nothing playing.")
						.setColor(color.inori)
		if (!serverQueue) return message.channel.send(noplaying);
		let nowplay = new Discord.RichEmbed()
						.setDescription(`🎶 Now playing: **${serverQueue.songs[0].title}**`)
						.setColor(color.inori)
		return message.channel.send(nowplay);
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["np"],
  permLevel: 0,
};

exports.help = {
  name: "nowplaying",
  description: "Show Currently Playing in Queue.",
  usage: "nowplaying",
};