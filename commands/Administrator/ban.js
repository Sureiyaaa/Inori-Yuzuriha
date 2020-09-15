const Discord = require("discord.js");
const errors = require("../../utilities/errors.js");
const color = require("../../storage/settings.json")
const defaultSettings = {
  prefix: "iy>",
  welcomeChannel: "None Set",
  rolelog: "None Set",
  moderationChannel: "None Set",
  messageLogs: "None Set",
  welcomeMessage: "**Welcome to {{guild}}, {{user}}! You are the {{count}}th User**"
}
module.exports.run = async (client, message, args, members) => {
    client.settings.ensure(message.guild.id, defaultSettings);

    if(!message.member.hasPermission("BAN_MEMBERS")) return errors.noPerms(message, "BAN_MEMBERS");

    let messageUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!messageUser) return errors.cantfindUser(message.channel);
    if(messageUser.id === client.user.id) return errors.botuser(message); 
    let userReason = args.join(" ").slice(22);
    if(!userReason) return message.channel.send("**Please Provide a Reason!**").then(msg=>{msg.delete(8000)})
    if(messageUser.hasPermission("MANAGE_MESSAGES")) return errors.equalPerms(message, messageUser, "MANAGE_MESSAGES");
    let noMod = new Discord.RichEmbed()
    .setTitle("Error!")
    .setDescription("Please Make Sure set your Server Moderation Logs.")
    .setFooter("Command | iy>setModerationChannel <channelID>", client.user.avatarURL)
    let banEmbed = new Discord.RichEmbed()
    .setDescription("~Ban~")
    .setColor(color.inori)
    .addField("Banned:", `${messageUser}`, true)
    .addField("ID:", `${messageUser.id}`, true)
    .addField("Banned By", `${message.author.username}`, true)
    .addField("Reason", userReason,false)
    .setFooter(`Moderation Channel | Time: ${message.createdAt}`, client.user.avatarURL)

      const left = message.client.channels.find('id', client.settings.get(message.guild.id, "moderationChannel"))
       if(!left){
      return message.channel.send(noMod).then(msg=> {msg.delete(8000)})
       }
    message.guild.member(messageUser).ban(userReason);
  try{
    left.send(banEmbed);
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
  aliases: ["ban"]
};

exports.help = {
  name: "ban",
  description: "Ban a User.",
  usage: "ban [@user] [Reason]",
};