const Discord = require("discord.js");
const config = require("../../storage/settings.json")
const db = require("quick.db")
const defaultSettings = {
  prefix: "iy>",
  welcomeChannel: "None Set",
  rolelog: "None Set",
  moderationChannel: "None Set",
  welcomeMessage: "**Welcome to {{guild}}, {{user}}! You are the {{count}}th User**"
}
const color = require("../../storage/settings.json")
exports.run = async (client, message, args) => {
  client.settings.ensure(message.guild.id, defaultSettings);
let gp = client.settings.get(message.guild.id, "prefix")   

  var numb = Math.floor(Math.random() * 100);
    if (numb <= 50) {
      var choice2 = "tails";
    } else if (numb > 50) {
      var choice2 = "heads";
    } 
  let amount = args[1]
  let targetBalance = await db.get(`userBalance_${message.author.id}`);
    if(targetBalance === null) targetBalance = 0;
  let member = db.fetch(`userBalance_${message.author.id}`)
 var choice = args[0];
  if(args[1] > 5000){
        return message.channel.send(`Coinflip Bet is limited to 5000.`)
    }
  if (member < args[1]) {
        return message.channel.send(`That's more money than you've got in your balance. try again.`)
    }
  if (!args[1]) return message.reply(`Please specify an amount to bet. \`${gp}coinflip\` <heads/tails> <amount>`)
  if (isNaN(args[1])) return message.reply('That was not a valid number!')
  if (message.content.includes('-')) return message.reply("Negative Amount!")
  if (choice == "heads" || choice == "h" || choice == "head" || choice == "Heads" || choice == "Head") {
    if (choice2 == "tails") {
      var response = "Tails! You lose."
      db.subtract(`userBalance_${message.author.id}`, amount)
    } else if (choice2 == "heads") {
      var response = "Heads You Win."
      db.add(`userBalance_${message.author.id}`, amount);
    }
    message.channel.send(response);
    if (member < args[1]) {
        return message.channel.send(`That's more money than you've got in your balance. try again.`)
    }
    if (!args[1]) return message.reply(`Please specify an amount to bet. \`${gp}coinflip\` <heads/tails> <amount>`)
    if (isNaN(args[1])) return message.reply('That was not a valid number!')
    if (message.content.includes('-')) return message.reply("Negative Amount!")
  } else if (choice == "tails" || choice == "t" || choice == "tail" || choice == "Tails" || choice == "Tail") {
    if (choice2 == "heads") {
      var response = "Heads! You Lose."
      db.subtract(`userBalance_${message.author.id}`, amount)
    } else if (choice2 == "tails") {
      var response = "Tails! You Win."
      db.add(`userBalance_${message.author.id}`, amount);
    } 
    message.channel.send(response);
  } else {
    message.channel.send(`You need to use \`${gp}coinflip\` <heads/tails> <amount>`);
  }
}
exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: ["cf"],
  permLevel: 0,
};

exports.help = {
  name: "coinflip",
  description: "Head or tails",
  usage: "coinflip heads/tails",
};
