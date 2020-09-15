const Discord = require("discord.js")
const db = require("quick.db");
const color = require("../../storage/settings.json")
exports.run = async (client, message, args) => {
    let prefix = '>';

    let user = message.author;
    let amount = args.join(" ").replace(user, '')

    let targetBalance = await db.get(`userWaifu_${user.id}`);
    if(!args[0]) {
    var embedd = new Discord.RichEmbed()
    .setTitle("**Usage!**")
    .setDescription(`You need to give a Waifu name iy>setwaifu {Name}`)
    .setColor(color.inori)
    message.channel.send(embedd)
    } else {
    if(targetBalance === null) targetBalance = "None";
        db.set(`userWaifu_${user.id}`, `${amount}`);
        message.channel.send({embed: {
            title: "Waifu Set!",
            color: 0x070b34,
            description: `I setted ${user.tag}'s Waifu' **${amount}**.`
        }});
}
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sw"],
  permLevel: 0,
};

exports.help = {
  name: "setwaifu",
  description: "Profile Set Waifu.",
  usage: "setwaifu [Waifu Name]",
};
