const Discord = require("discord.js")
const color = require("../../storage/settings.json")
exports.run = async (client, message, args) => {  


let rates = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

let result = Math.floor((Math.random() * rates.length));
	let embed = new Discord.RichEmbed()
	.setTitle("**Result!**")
	.setDescription(`${result}/10`)
  .setColor(color.inori)
  return message.channel.send(embed);

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["rate"],
  permLevel: 0,
};

exports.help = {
  name: "rate",
  description: "rate <args>",
  usage: "rate",
};