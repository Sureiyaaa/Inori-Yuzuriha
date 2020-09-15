const Enmap = require('enmap')
const Discord = require("discord.js");
const client = new Discord.Client();
const color = require("../storage/settings.json")
client.settings = new Enmap({
  name: "settings",
  fetchAll: false,
  autoFetch: true,
  cloneLevel: 'deep'
});
module.exports = guild => {
	  console.log(`[${new Date().toLocaleString()}] Removed Guild > ${guild.name}`);
  var embed = new Discord.RichEmbed()  
.setColor(color.inori)
.setDescription(`**<:sigh_inori:606025840018587649> Removed Guild!** \n\n **●︎ Guild: ** ${guild.name}`)
  const left = guild.client.channels.find('id', "628241464253480962")  
  left.send(embed)
  client.settings.delete(guild.id);
};