const Discord = require("discord.js")
const db = require("quick.db");
const ms = require("parse-ms");
const color = require("../../storage/settings.json")
exports.run = async (client, message, args) => {
    let amount = 1
  
    let member = db.fetch(`userReset_${message.author.id}`)
    let user = message.mentions.members.first() 
    let resettoken = await db.get(`lastReset_${message.author.id}`);
    if(resettoken === null) resettoken = 0;

     if (member < amount) {
        let nemded = new Discord.RichEmbed()
        .setDescription(`You don't have enough Reset Token`)
        .setFooter(`Vote to get Reset Tokens`)
        .setColor(color.inori)
        return message.channel.send(nemded)
    }
        db.set(`lastService_${message.author.id}`, 0);
        db.set(`lastWork_${message.author.id}`, 0);
        db.subtract(`userReset_${message.author.id}`, amount)
        message.channel.send({embed: {
            color: 0x070b34,
            description: `Reset Successful!.`
        }});

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["resetcd"],
  permLevel: 0,
};

exports.help = {
  name: "resetcooldown",
  description: "Reset Work and Service CoolDown",
  usage: "reset",
};
