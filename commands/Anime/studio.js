const Discord = require('discord.js');
const studio = require("../../storage/studio");
const color = require("../../storage/settings.json")

exports.run = async (client, message, args) => {

if(!args[0]){
     let embed = new Discord.RichEmbed()
     .setTitle("Usage!")
    .setDescription('**iy>animestudio [Studio Name]**')
    .setFooter("Powered by: Anilist")
    .setColor(color.inori)
     
     message.channel.send(embed);
} else {
let response;
response = await studio.search(args.join(" "));
  
    message.channel.send({
        embed: {
            ...response,
            color: 0x070b34
        }
    });
}
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["anistudio"],
  permLevel: 0,
};

exports.help = {
  name: "animestudio",
  description: "Search Anime Studio.",
  usage: "animestudio [Anime Studio Name]",
};