const Discord = require("discord.js");
const color = require("../../storage/settings.json")
exports.run = async (client, message, args) => {
  console.log('ship command has been used!');
        
        let user1 = args[0];
        let user2 = args[1];
        if (!user1) return message.channel.send("You did not select the first item to ship")
        if (!user2) return message.channel.send("You did not select the second item to ship")
        var ship = Math.floor(Math.random() * 100) + 1;
        if (ship <= 50) {
                    const badmatch = new Discord.RichEmbed()
                    .setTitle(":broken_heart: " + ship + "% :broken_heart:")
                    .setDescription(user1 + " and " + user2 + " do not match very well")
                    .setColor(color.inori)
                    message.channel.send(badmatch);
           } else if (ship === 100) {
                const perfectmatch = new Discord.RichEmbed()
                    .setTitle(":heart: " + ship + "% :heart:")
                    .setDescription(user1 + " and " + user2 + " are meant for eachother")
                    .setColor(color.inori)
                    message.channel.send(perfectmatch);
           } else {
               const match = new Discord.RichEmbed()
                    .setTitle(":heart: " + ship + "% :heart:")
                    .setDescription(user1 + " and " + user2 + " match very well")
                    .setColor(color.inori)
                    message.channel.send(match);
            }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ship"],
  permLevel: 0,
};

exports.help = {
  name: "ship",
  description: "Ship 2 Users.",
  usage: "ship <@user 1> <@user 2>",
};
