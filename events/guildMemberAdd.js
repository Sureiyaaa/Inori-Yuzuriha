const Discord = require('discord.js');
const snekfetch = require("snekfetch");
const Canvas = require('canvas');
const client = new Discord.Client();
const Enmap = require('enmap')
const errors = require("../utilities/errors.js");
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
module.exports = async(member) => {
  client.settings.ensure(member.guild.id, defaultSettings);
  let welcomeMessage = client.settings.get(member.guild.id, "welcomeMessage");
  welcomeMessage = welcomeMessage.replace("{{user}}", member.user.tag);
  welcomeMessage = welcomeMessage.replace("{{guild}}", member.guild.name);
  welcomeMessage = welcomeMessage.replace("{{count}}", member.guild.memberCount);

  const left = member.client.channels.find('id', client.settings.get(member.guild.id, "welcomeChannel"))
  if(!left){
    return;
  }

  /*
  This Section is where the Canvas start
  */
    const canvas = Canvas.createCanvas(1050, 325);
    const ctx = canvas.getContext('2d');
    
    const background = await Canvas.loadImage('https://i.imgur.com/g2sPNQe.png');

    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);


ctx.strokeStyle = '#74037b';
    ctx.strokeRect(0, 0, canvas.width, canvas.height)

  ctx.font = 'bold 45px ';
    ctx.fillStyle = '#FFFFFF';
    ctx.fillText(`${member.user.tag}!`, canvas.width / 3.7, canvas.height / 2.0);
  ctx.font = '45px ';
    ctx.fillStyle = '#FFFFFF';
    ctx.fillText(`You are the ${member.guild.memberCount}th User`, canvas.width / 3.7, canvas.height / 1.5);

    ctx.beginPath();
    ctx.arc(125, 150, 100, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();

    const { body: buffer } = await snekfetch.get(member.user.displayAvatarURL);
    const avatar = await Canvas.loadImage(buffer);
    ctx.drawImage(avatar, 28, 50, 200, 200);
  const attachment = new Discord.Attachment(canvas.toBuffer(), 'welcome-image.png');
    try{
    left.send(welcomeMessage, attachment);
  } catch (error) {
    if(!error){
      return;
    } else {
      return;
    }
  }
};