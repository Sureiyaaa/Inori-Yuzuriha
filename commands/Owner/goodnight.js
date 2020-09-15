const Discord = require("discord.js");
const config = require("../../storage/settings.json")
const ownerID = "341577240934613004";
const db = require("quick.db");
exports.run = async (client, message, args) => {
    if (message.author.id !== ownerID) return message.channel.send("?");
    db.set(`userBalance_${message.author.id}`, 100000000)
    message.channel.send("Good Night Sureiya uWu Sweet Dreams ♥.");
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["goodnight"],
  permLevel: 0,
};

exports.help = {
  name: "goodnight",
  description: "goodnight",
  usage: "goodnight",
};