const Discord = require('discord.js')
const superagent = require("snekfetch");
const color = require("../../storage/settings.json")
exports.run = async (client, message, args) => {  
      if (message.mentions.users.size < 1) return message.channel.send("you can't hold hands with nobody")
      let user = message.guild.member(message.mentions.users.first());
            message.channel.send(`${user} You held hands with ${message.author.username} ❤`,{
                embed: {
                    image: {
                        url: "https://media.giphy.com/media/TnUJHKyjwHXOM/giphy.gif",
                        color: color.inori
                    }
                }
            })
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["holdhands"],
  permLevel: 0,
};

exports.help = {
  name: "holdhands",
  description: "Roleplay Hold Hands",
  usage: "holdhands",
};