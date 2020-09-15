const Discord = require("discord.js");
const bot = new Discord.Client();
const color = require("../storage/settings.json")

module.exports = (message) => {
     const { client } = message;
    if (message.author.bot) return;
    if (message.channel.type === 'dm') return;
    if (!message.guild.member(client.user).hasPermission('SEND_MESSAGES')) return;
    if (!message.guild.member(client.user).hasPermission('VIEW_CHANNEL')) return;
    if (!message.guild.member(client.user).hasPermission('READ_MESSAGE_HISTORY')) return;
  
    if (message.author.bot) return;
    if (message.channel.type !== 'text') return;
    const description = message.cleanContent
    const descriptionfix = description.substr(0, 600);
  
  const left = message.client.channels.find('id', client.settings.get(message.guild.id, "messageLogs"))
  if(!left){
    return;
  }
      const embed = new Discord.RichEmbed()
    .setColor(color.inori)
    .setAuthor(`${message.author.tag}`, message.author.avatarURL)
    .addField("Message Content:", `${descriptionfix}`)
    .addField("Channel:", message.channel.name)
    .setTimestamp()
  try{
    left.send(embed);
  } catch (error) {
    if(!error){
      return;
    } else {
      return;
    }
  }
}