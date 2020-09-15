const Discord = require('discord.js');
const color = require("../storage/settings.json")
const client = new Discord.Client();
const Enmap = require('enmap')
client.settings = new Enmap({
  name: "settings",
  fetchAll: false,
  autoFetch: true,  
  cloneLevel: 'deep'
});
const defaultSettings = {
  prefix: "iy>",
  welcomeChannel: "None Set",
  rolelog: "None Set",
  moderationChannel: "None Set",
  messageLogs: "None Set",
  welcomeMessage: "**Welcome to {{guild}}, {{user}}! You are the {{count}}th User**"
}
module.exports = async (oldMember, newMember) => {

  client.settings.ensure(newMember.guild.id, defaultSettings);
  const left = newMember.client.channels.find('id', client.settings.get(newMember.guild.id, "rolelog"))
    
  if (oldMember.roles.size < newMember.roles.size) {
  let dif = newMember.roles.filter(r => !oldMember.roles.has(r.id)).first()
    const embed2 = new Discord.RichEmbed()
    .setColor(color.inori)
    .setAuthor(`${newMember.user.tag}`, newMember.user.avatarURL)
    .setThumbnail(newMember.user.avatarURL)
    .setTitle(`Received a ${dif.name} Role!`)
    .addField("Role Received:", `**${dif.name}**`)
    .setTimestamp()
    .setFooter(`Inori Yuzuriha | Member Update`, newMember.guild.iconURL)
  try{
    left.send(embed2);
  } catch (error) {
    if(!error){
      return;
    } else {
      return;
    }
  }
  } else if (oldMember.roles.size > newMember.roles.size) {
    let dif = oldMember.roles.filter(r => !newMember.roles.has(r.id)).first()
              const embed = new Discord.RichEmbed()
    .setColor(color.inori)
    .setAuthor(`${newMember.user.tag}`, newMember.user.avatarURL)
    .setThumbnail(newMember.user.avatarURL)
    .setTitle(`Removed ${dif.name} Role!`)
    .addField("Role Taken:", `**${dif.name}**`)
    .setTimestamp()
    .setFooter(`Inori Yuzuriha | Member Update`, newMember.guild.iconURL)
  try{
  left.send(embed)
  } catch (error) {
    if(!error){
      return;
    } else {
      return;
    }
  }
  }
}