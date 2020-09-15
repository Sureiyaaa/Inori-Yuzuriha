const Discord = require("discord.js")
const request = require('node-superfetch');
const color = require("../../storage/settings.json")
const { shorten } = require('../../utilities/utils.js');
exports.run = async (client, message, args) => {

		const num = Math.floor(Math.random() * 100000);
		const { text } = await request.get(`https://www.thiswaifudoesnotexist.net/snippet-${num}.txt`);
		const embed = new Discord.RichEmbed()
			.setDescription(shorten(text, 1000))
      .setTitle("Waifu")
      .setColor(color.inori)
			.setThumbnail(`https://www.thiswaifudoesnotexist.net/example-${num}.jpg`);
		return message.channel.send(embed);

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["w"],
  permLevel: 0,
};

exports.help = {
  name: "waifu",
  description: "Random Waifu.",
  usage: "waifu",
};
