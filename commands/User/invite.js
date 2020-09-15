const Discord = require('discord.js');
const color = require("../../storage/settings.json")

exports.run = async (client, message, args) => {
  var here = [
    "[Click Me]"
  ];
  var phrases = [
    "**Invite me to your Server with this Link**",
    "**I'd love to join your server!**",
    "**You can invite me to your server!**"
  ];
  var phrase = phrases[Math.round(Math.random() * (phrases.length - 1))];
    let ico = client.user.avatarURL
    var embed = new Discord.RichEmbed()
        .setAuthor("Inori Yuzuriha#2892", client.user.avatarURL)
        .setTitle("Invite")
        .setDescription(`[${here}](https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=1849032063)` + ` ${phrase}`)
        .setColor(color.inori)
        .setImage("https://i.imgur.com/vDKM0Qc.gif")
        .setFooter(`Requested by: ${message.author.tag} | Inori Yuzuriha`, message.author.avatarURL)
        message.channel.sendEmbed(embed);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["invite"],
  permLevel: 0,
};

exports.help = {
  name: "invite",
  description: "Invite Inori to your Server",
  usage: "invite",
};
