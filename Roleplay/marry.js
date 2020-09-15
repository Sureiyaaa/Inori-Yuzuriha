const Discord = require("discord.js");
const snekfetch = require("snekfetch")
const color = require("../../storage/settings.json")
exports.run = async (client, message, args) => {  
    
      if (message.mentions.users.size < 1) return message.channel.send("You must Mention someone to Marry.")
      let user = message.guild.member(message.mentions.users.first());
            message.channel.send(`${user} You got married with ${message.author.username} ❤`)
    let embed = new Discord.RichEmbed()
      .setColor(color.inori)
      .setImage("https://i.imgur.com/u67QLhB.gif")
    message.channel.send(embed)
              
  
} 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["marry"],
  permLevel: 0,
};

exports.help = {
  name: "marry",
  description: "Roleplay Marry.",
  usage: "marry <@user>",
};