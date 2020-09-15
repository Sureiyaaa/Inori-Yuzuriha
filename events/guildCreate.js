const Discord = require("discord.js");
const client = new Discord.Client();
const color = require("../storage/settings.json")
module.exports = guild => {
  console.log(`[${new Date().toLocaleString()}] New Guild > ${guild.name} Members > ${guild.memberCount}`);
let defaultChannel = "";
guild.channels.forEach((channel) => {
  if(channel.type == "text" && defaultChannel == "") {
    if(channel.permissionsFor(guild.me).has("SEND_MESSAGES")) {
      defaultChannel = channel;
    }
  }
})
defaultChannel.send("Kon'nichiwa Inori-des My prefix is (iy>) UwU.") 
var embed = new Discord.RichEmbed()
.setColor(color.inori)
.setDescription(`**<:nom_inori:606020087874584588> New Guild!** \n\n **●︎ Owner: ** ${guild.owner.user.tag}\n **●︎ Guild: ** ${guild.name} \n**●︎ Members: ** ${guild.memberCount}`)   
.setThumbnail(guild.iconURL)
  const left = guild.client.channels.find('id', "628241464253480962")  
  left.send(embed)
};