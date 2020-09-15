const Discord = require('discord.js');
const config = require('../../storage/settings.json');
const prefix = config.prefix
const color = require("../../storage/settings.json")
exports.run = async (bot, message, args) => {
	
	var serverQueue = message.client.queue.get(message.guild.id);
    let noplaying = new Discord.RichEmbed()
						.setDescription("There is nothing playing.")
						.setColor(color.inori)
		if (!serverQueue) return message.channel.send(noplaying);
		let curvol = new Discord.RichEmbed()
						.setDescription(`The current volume is: ${serverQueue.volume}`)
						.setColor(color.inori)
		if (!args[0]) return message.channel.send(curvol);
		if(isNaN(args[0])){
        message.channel.send({embed: {
            title: "Usage!",
            color: 0x070b34,
            description: `Usage: ${prefix}volume [0-200]`
        }});
    	}
    	if(args[0] > 200) {
    	message.channel.send({embed: {
            title: "Usage!",
            color: 0x070b34,
            description: `Usage: ${prefix}volume [0-200]`
        }});	
    	} else {
		serverQueue.volume = args[0];
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100);
		let newvol = new Discord.RichEmbed()
						.setDescription(`I set the volume to: ${args[0]}`)
						.setColor(color.inori)
		return message.channel.send(newvol);
	}
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["v"],
  permLevel: 0,
};

exports.help = {
  name: "volume",
  description: "Set Music Volume.",
  usage: "volume",
};
