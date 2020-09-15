const Discord = require("discord.js");
const color = require("../../storage/settings.json")
exports.run = async (client, message, args) => {
    let serverembed = new Discord.RichEmbed()
        .setColor(color.inori)
        .setDescription(`**Please Specify 2-100 Messages to be Deleted**`);
  if (!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return; 
      if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply("You are not my master.");
  if(!args[0]) return message.channel.send(`Please Specify 2-100 Messages to be Deleted`);
  if(isNaN(args[0])) return message.channel.send(`Please Specify a Number Value`);
  if(args[0] > 100) return message.channel.send(`Please Specify 2-100 Messages to be Deleted`);
  try {
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`Cleared ${args[0]} messages.`).then(msg => msg.delete(5000));
  });
  } catch (error) {
    if(!error){
      return;
    } else {
      return;
    }
  }
} 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["clearmsg"]
};

exports.help = {
  name: "clearmsg",
  description: "Clear Messages.",
  usage: "clearmsg [2-100]",
};