const settings = require("../../storage/settings.json");
const Discord = require("discord.js")
const Canvas = require('canvas')
const snekfetch = require('node-superfetch')
exports.run = async (client, message, args) => {

  const users = client.users.map(x => x.id);
  const output = users[Math.floor(Math.random() * users.length)];
  const randUser = client.users.get(output);
  let mention = message.mentions.users.first()
  let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

  var min = Math.ceil(0);
  var max = Math.floor(100);

  const amount = Math.floor(Math.random() * (max - min)) + min;
  if(message.mentions.users.size < 1) return message.reply('You need to mention somebody to love with.')

  if (amount >= 0 && amount <= 20) {
     message.channel.send('Uh oh, romance isn\'t on the cards for you two! 💔')
  } else if (amount >= 21 && amount <= 55) {
    message.channel.send('I wouldn\'t expect much, But good match.')
  } else if (amount >= 56 && amount <= 75) {
    message.channel.send('Ooh, Look at you two! 💕') // Ignoring the literal error from ESLint, concat keeps the text readable otherwise it changes font in the editor
  } else if (amount >= 76 && amount <= 89) {
    message.channel.send('Woah! You Two are a Really Good Match! ❤️')
  } else if (amount > 90) {
    message.channel.send('So, when\' the wedding? :bride_with_veil::skin-tone-1: :bouquet:')
  }

  const canvas = Canvas.createCanvas(750, 350);
  const ctx = canvas.getContext('2d');
  const {body: a} = await snekfetch.get(mention.avatarURL)
  const {body: b} = await snekfetch.get(message.author.avatarURL)
  const {body: c} = await snekfetch.get("https://i.imgur.com/MECX8tq.png")
  const avatar = await Canvas.loadImage(a)
  const image = await Canvas.loadImage(c)
  const avatar2 = await Canvas.loadImage(b)
  ctx.drawImage(image, 0, 0, 750, 350)
  ctx.drawImage(avatar, 28, 58, 235, 235)
  ctx.drawImage(avatar2, 485, 58, 235, 235)
  ctx.font = "35px Arial";
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fillText(`${amount}%`, 345, 180)
  const attach = new Discord.Attachment(canvas.toBuffer(), "ship.png");
  
  message.channel.send(attach)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["lovemeter", "lm"],
  permLevel: 0,
};

exports.help = {
  name: 'love',
  description: 'How much do you love your fellow member?',
  usage: 'love | love [@user]',
};