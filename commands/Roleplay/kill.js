const Discord = require('discord.js')
const { wastedP } = require('../../assets/json/actions.json');
const color = require("../../storage/settings.json")
exports.run = async (client, message, args) => {
    let user = message.mentions.users.first()
    let hugUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

       if(message.mentions.users.size < 1) {
     const embed1 = new Discord.RichEmbed()
      		  .setDescription(`**${message.author.username}** Died!`)
            .setColor(color.inori)
            .setImage(wastedP[Math.round(Math.random() * (wastedP.length - 1))]);

  message.channel.send(embed1)
 
    } else {
           const embed2 = new Discord.RichEmbed()
      		  .setDescription(`**${message.author.username}** Killed **${message.mentions.users.first().username}**!`)
            .setColor(color.inori)
            .setImage(wastedP[Math.round(Math.random() * (wastedP.length - 1))]);

  message.channel.send(embed2)
    }

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kill"],
  permLevel: 0,
};

exports.help = {
  name: "kill",
  description: "Roleplay Kill.",
  usage: "kill",
};