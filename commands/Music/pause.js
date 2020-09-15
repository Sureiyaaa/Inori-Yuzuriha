const Discord = require("discord.js");
const ytdl = require('ytdl-core');
const color = require("../../storage/settings.json")
exports.run = async (client, message, args) => {
   let noplaying = new Discord.RichEmbed()
						.setDescription("There is nothing playing.")
						.setColor(color.inori)
	var serverQueue = message.client.queue.get(message.guild.id);
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			let pauseembed = new Discord.RichEmbed()
						.setDescription(`⏸ Paused the music for you!`)
						.setColor(color.inori)
			return message.channel.send(pauseembed);
		}
		return message.channel.send(noplaying);

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["pau"],
  permLevel: 0,
};

exports.help = {
  name: "pause",
  description: "Pause Current Song.",
  usage: "pause",
};
