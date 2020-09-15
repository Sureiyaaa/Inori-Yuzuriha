const Discord = require("discord.js");
const color = require("../../storage/settings.json")
exports.run = async (bot, message, args) => {
  	var serverQueue = message.client.queue.get(message.guild.id);
                let notvc = new Discord.RichEmbed()
						.setDescription("You are not in a Voice Channel.")
						.setColor(color.inori)
		if (!message.member.voiceChannel) return message.channel.send(notvc);
		let noskip = new Discord.RichEmbed()
						.setDescription("There is nothing playing = No Skip..")
						.setColor(color.inori)
		if (!serverQueue) return message.channel.send(noskip);
		serverQueue.connection.dispatcher.end('Skip command has been used!');
		return undefined;
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["next"],
  permLevel: 0,
};

exports.help = {
  name: "skip",
  description: "Skip to Next Song.",
  usage: "skip",
};
