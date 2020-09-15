const Discord = require("discord.js");
const color = require("../../storage/settings.json")
exports.run = async (bot, message, args) => {
  var index = 0;
          const notp = new Discord.RichEmbed()
        .setTitle(":clipboard:**Queue**")
        .setDescription(`\`\`\`asciidoc\n
There is nothing in Queue.\`\`\``)
        .setColor(color.inori)
        .setFooter("Inori Yuzuriha Music");
    var serverQueue = message.client.queue.get(message.guild.id);
            if (!serverQueue) return message.channel.send(notp);
        const quembed = new Discord.RichEmbed()
        .setTitle(":minidisc: Now playing ")
        .setDescription(`**${serverQueue.songs[0].title}**`)
        .addField(`:clipboard:**Queue** ${serverQueue.songs.length}/15`, `${serverQueue.songs.map(song => `-${++index}- ${song.title}`).join('\n')}`)
        .setColor(color.inori)
        .setFooter("Inori Yuzuriha Music");
    return message.channel.send(quembed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["q"],
  permLevel: 0,
};

exports.help = {
  name: "queue",
  description: "View Server Music Queue.",
  usage: "queue",
};
