const Discord = require('discord.js');
const color = require("../../storage/settings.json")
exports.run = async (bot, message, args) => {

		const serverQueue = message.client.queue.get(message.guild.id);
  
  let noplaying = new Discord.RichEmbed()
						.setDescription("There is nothing playing.")
						.setColor(color.inori)
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			let resumeembed = new Discord.RichEmbed()
						.setDescription(`▶ Resumed the music for you!`)
						.setColor(color.inori)
			return message.channel.send(resumeembed);
		}
		return message.channel.send(noplaying);
    
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["continue"],
  permLevel: 0,
};

exports.help = {
  name: "resume",
  description: "Resume Current Song.",
  usage: "resume",
};
