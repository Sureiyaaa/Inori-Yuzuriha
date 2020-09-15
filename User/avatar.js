const Discord = require("discord.js")
const settings = require("../../storage/settings.json");
const color = require("../../storage/settings.json")
exports.run = async (bot, message, args) => {
  
  
    var footertext = [`${bot.user.username} | Avatar Command`];
    var rand = Math.floor(Math.random() * footertext.length);
    var randomfooter = footertext[rand]; 
    let ico = bot.user.avatarURL

    let msg = await message.channel.send('``Generating that Kawaii avatar...``') 

    let user = message.mentions.users.first() || message.author; 


    let embed = new Discord.RichEmbed() 
        .setAuthor(`${user.username}'s Avatar`) 
        .setImage(user.displayAvatarURL)
        .setColor(color.inori) 
        .setFooter(`${randomfooter}`, `${ico}`) 
        .setTimestamp();

    await message.channel.send(embed) 
  
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["avatar"],
  permLevel: 0,
};

exports.help = {
  name: "avatar",
  description: "Shows User's Avatar.",
  usage: "avatar",
};
