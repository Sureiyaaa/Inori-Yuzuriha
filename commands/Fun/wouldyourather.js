const Discord = require("discord.js");
const superagent = require("superagent");
const questions = require("../../storage/wouldyourather.json")
const color = require("../../storage/settings.json")
module.exports.run = async (client, message, args) => {
     var rand = Math.floor(Math.random() * questions.length);
  var randomfooter = questions[rand]; 
let wEmbed = new Discord.RichEmbed()
    .setTitle("Would You Rather")
    .setColor(color.inori)
    .setDescription(randomfooter)

    message.channel.send(wEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["wyr"],
  permLevel: 0,
};

exports.help = {
  name: "wouldyourather",
  description: "wouldyourather",
  usage: "wouldyourather",
};