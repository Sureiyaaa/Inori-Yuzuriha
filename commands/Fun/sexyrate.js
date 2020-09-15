const Discord = require("discord.js");
const color = require("../../storage/settings.json")
module.exports.run = async (client, message, args) => {
    const sexyrate = Math.floor(Math.random() * 100)
       const embed = new Discord.RichEmbed()
            .addField(":heart_decoration: Sexy Rate :heart_decoration: ", "I rate you a " + sexyrate + " out of 100 on the sexy scale")
            .setThumbnail(message.author.displayAvatarURL)
            .setColor(color.inori)
       message.channel.send({embed})

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sexyrate"],
  permLevel: 0,
};

exports.help = {
  name: "sexyrate",
  description: "Sexy Rating.",
  usage: "sexyrate",
};