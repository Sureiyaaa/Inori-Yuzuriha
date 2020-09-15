const Discord = require('discord.js');
const character = require("../../storage/character");
const color = require("../../storage/settings.json")

exports.run = async (client, message, args) => {

if(!args[0]){
     let embed = new Discord.RichEmbed()
     .setTitle("Usage!")
    .setDescription('**iy>anichr [Anime Name]**')
    .setFooter("Powered by: Anilist")
    .setColor(color.inori)
     
     message.channel.send(embed);
} else {
let response;
response = await character.search(args.join(" "));
  
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
  aliases: ["anichr"],
  permLevel: 0,
};

exports.help = {
  name: "anicharacter",
  description: "Search Anime Character.",
  usage: "anichr [Anime Character Name]",
};