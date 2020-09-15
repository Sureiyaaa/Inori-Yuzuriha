const Discord = require("discord.js")
const db = require("quick.db");
const color = require("../../storage/settings.json")
exports.run = async (Bot, message, args) => {

    let user = message.mentions.users.first() || message.author;
    let resettoken = await db.get(`userReset_${user.id}`);
    if(resettoken === null) resettoken = 0;
  var embed = new Discord.RichEmbed()
        .setTitle("**Reset Token**")
        .setDescription(`You have **${resettoken}** Reset Tokens.`)
        .setColor(color.inori)
    message.channel.send(embed).then(msg => {msg.delete(10000)});
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["rt"],
  permLevel: 0,
};

exports.help = {
  name: "resetoken",
  description: "Reset Token Balance",
  usage: "resetoken",
};
