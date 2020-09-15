const Discord = require("discord.js")
const db = require("quick.db");
const color = require("../../storage/settings.json")
exports.run = async (Bot, message, args) => {

    let user = message.mentions.users.first() || message.author;
    let balance = await db.get(`userBalance_${user.id}`);
    if(balance === null) balance = 0;
    
  var embed = new Discord.RichEmbed()
        .setTitle("BANK")
        .setDescription(`User Balance`)
        .setColor(color.inori)
        .addField("Account Holder:", `${user.tag}`, true)
        .addField("Balance:", `**¥${balance}**`, true)
    message.channel.send(embed).then(msg => {msg.delete(10000)});
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["money"],
  permLevel: 0,
};

exports.help = {
  name: "balance",
  description: "User Balance.",
  usage: "monmey <@user>",
};
