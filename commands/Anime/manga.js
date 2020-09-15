const Discord = require('discord.js');
const media = require("../../storage/media");
const color = require("../../storage/settings.json")

exports.run = async (client, message, args) => {

if(!args[0]){
     let embed = new Discord.RichEmbed()
     .setTitle("Usage!")
    .setDescription('**iy>manga [Manga Name]**')
    .setFooter("Powered by: Anilist")
    .setColor(color.inori)
     
     message.channel.send(embed);
} else {
let response;
response = await media.search(args.join(" "), "MANGA");
  
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
  aliases: ["mng"],
  permLevel: 0,
};

exports.help = {
  name: "manga",
  description: "Search Manga.",
  usage: "manga [Manga Name]",
};