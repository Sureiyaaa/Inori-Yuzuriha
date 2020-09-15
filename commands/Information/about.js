const Discord = require("discord.js")
const color = require("../../storage/settings.json")
exports.run = (bot, message, args) => {
  console.log("About Used");
    let ico = bot.user.avatarURL
    message.channel.sendMessage(`${message.author.username}` + "-senpai h-here....")
    var embed = new Discord.RichEmbed()
        .setTitle("❯\u2000\Inori Yuzuriha")
        .addField("About", "Hello This is Inori Yuzuriha i'm a bot created by Sureiya, Inori Yuzuriha is the female protagonist of Guilty Crown and a member of the resistance guerrilla group called Funeral Parlor.")
        .addField("❯\u2000\Author", " ```@Sureiya``` ", true)
        .addField("❯\u2000\Bot Version", " ```4.13.0``` ", true)
        .setColor(color.inori)
        .setThumbnail(ico)
        .setImage("https://i.imgur.com/tEkGXL6.gif")
        .addField("❯\u2000\Created On", `\`\`\`diff\n
- July 14 2018 GMT+0000(UTC)\`\`\``, false)
        .setFooter("© Sureiyā#3654", bot.user.avatarURL)
        message.channel.sendEmbed(embed);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["bot, developer"],
  permLevel: 0,
};

exports.help = {
  name: "about",
  description: "About Inori Yuzuriha.",
  usage: "about",
};