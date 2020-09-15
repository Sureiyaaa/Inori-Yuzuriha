const Discord = require("discord.js")
const db = require("quick.db");
const ms = require("parse-ms");
const color = require("../../storage/settings.json")
exports.run = async (Bot, message, args) => {

    let coolDown = 3.6e+6;
    let amount = Math.floor(Math.random() * 500) + 1

    let lastDaily = await db.get(`lastWork_${message.author.id}`);

    if(lastDaily !== null && coolDown - (Date.now() - lastDaily) > 0) {
        let timeObj  = ms(coolDown - (Date.now() - lastDaily));

        message.channel.send({embed: {
            title: "Work!",
            color: 0x070b34,
            description: `You can work again in **${timeObj.hours}h and ${timeObj.minutes}m**`
        }});
    } else {
        message.channel.send({embed: {
            title: "Work!",
            color: 0x070b34,
            description: `You got **¥${amount}** from work`
        }});

        db.set(`lastWork_${message.author.id}`, Date.now());
        db.add(`userBalance_${message.author.id}`, amount);
    }

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["work"],
  permLevel: 0,
};

exports.help = {
  name: "work",
  description: "work and get money",
  usage: "work",
};
