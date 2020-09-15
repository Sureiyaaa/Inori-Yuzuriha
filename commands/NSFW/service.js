const Discord = require('discord.js')
const superagent = require("superagent");
const db = require("quick.db");
const ms = require("parse-ms");
const color = require("../../storage/settings.json")
exports.run = async (client, message, args) => {  
  let coolDown = 1.8e+6;
   let service = [
      "https://i.imgur.com/Onda6pR.jpg",
      "https://i.imgur.com/F2t35mk.jpg",
      "https://i.imgur.com/kqVXtZE.jpg",
      "https://i.imgur.com/HiozL3e.jpg",
      "https://i.imgur.com/LIRQYAT.jpg",
      "https://i.imgur.com/wJRDktm.jpg",
      "https://i.imgur.com/TBF20jU.jpg",
      "https://i.imgur.com/YoWbKlf.jpg",
      "https://i.imgur.com/sl3gWEq.jpg",
      "https://i.imgur.com/QTr3DzV.jpg",
      "https://i.imgur.com/JWypJdM.jpg",
      "https://i.imgur.com/r9oQXcG.jpg",
      "https://i.imgur.com/F66tzZO.jpg",
      "https://i.imgur.com/vEtzahJ.png",
      "https://i.imgur.com/wkSbjHs.png",
      "https://i.imgur.com/quxhR8s.jpg",
      "https://i.imgur.com/5vAIaxF.jpg",
      "https://i.imgur.com/xhdxT3u.jpg",
      "https://i.imgur.com/vohxtp5.jpg",
      "https://i.imgur.com/vwkKhv9.jpg",
      "https://i.imgur.com/M8PNCcG.jpg",
      "https://i.imgur.com/p9XDqpH.jpg",
      "https://i.imgur.com/X9Oen9h.jpg",
      "https://i.imgur.com/uHYW1Up.jpg",
      "https://i.imgur.com/MVHqGXB.jpg",
      "https://i.imgur.com/hL62qCP.jpg",
      "https://i.imgur.com/nQCFWm8.jpg",
      "https://i.imgur.com/Ekx4LeN.jpg",
      "https://i.imgur.com/mnz1PoN.jpg",
      "https://i.imgur.com/2369m7e.jpg"
    ]
    let serviceresult = Math.floor((Math.random() * service.length));

   let lines = [
      "S-So.. What do you think?...",
      "You! Pervert!! T-T",
      "oWo Whats this??",
      "Hehehe. Don't mind me just gonna leave this here..",
      "uWu Service!",
      "Hotsu!",
      "Service?? Here..",
      "You are the worst..",
      "Do you think this is bad?..",
      "Its not what you think!!!",
      `Here ${message.author.username}-sama, This is kinda personal but here...`,
      "Why Service????",
      "Vote for me ill give you another one.",
      "Oh... So you want service.",
      "I'll give you another one if you vote for me"
    ]
    let linesresult = Math.floor((Math.random() * lines.length));
        let lastService = await db.get(`lastService_${message.author.id}`);
                if(lastService !== null && coolDown - (Date.now() - lastService) > 0) {
        let timeObj  = ms(coolDown - (Date.now() - lastService));

        message.channel.send({embed: {
            title: "**No Service!**",
            color: 0x070b34,
            description: `You can use this again in **${timeObj.minutes}m**`,
            footer: "Vote to reset Cooldown iy>vote"
        }});
    } else {
    message.channel.send(`${message.author.username}` + "-sama Check my Private Message.. UwU")
  message.author.send("H-Here Master:blush: ")
    let ghembed = new Discord.RichEmbed()
        .setColor(color.inori)
        .setDescription(lines[linesresult])
        .setImage(service[serviceresult])
    message.author.sendEmbed(ghembed)

        db.set(`lastService_${message.author.id}`, Date.now());
    }
  

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["service"],
  permLevel: 0,
};

exports.help = {
  name: "service",
  description: "NSFW Service.",
  usage: "service",
};