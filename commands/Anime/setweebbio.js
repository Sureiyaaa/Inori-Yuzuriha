const Discord = require("discord.js")
const db = require("quick.db");
const color = require("../../storage/settings.json")
exports.run = async (client, message, args) => {
    let prefix = '>';

    let user = message.author;
    let amount = args.join(" ").replace(user, '')

    let targetBalance = await db.get(`userStatus_$_${user.id}`);
    if(!args[0]) {
      var embedd = new Discord.RichEmbed()
    .setTitle("**Usage!**")
    .setDescription(`You need to give a Waifu name iy>setbio {bio}`)
    .setColor(color.inori)
    .setFooter("You can use next line/enter doing the bio")
    message.channel.send(embedd)    } else {
    if(targetBalance === null) targetBalance = "None";
        db.set(`userStatus_${user.id}`, `${amount}`);
        message.channel.send({embed: {
            title: "Weeb Bio set!",
            color: 0x070b34,
            description: `I setted ${user.tag}'s status to' **${amount}**.`
        }});
      }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["swb"],
  permLevel: 0,
};

exports.help = {
  name: "setweebbio",
  description: "Profile Set Bio.",
  usage: "setwebbio [Bio]",
};