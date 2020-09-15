const Discord = require("discord.js")
exports.run = async (client, message, args) => {  
if (args.join(" ").toLowerCase().includes("monika")) {
    return message.channel.send("No. Just no.");
  }
  const encodedwaifu = Buffer.from(args.join(" "))
    .toString("base64")
    .split("");
  encodedwaifu.forEach((item, index, array) => {
    array[index] = item.charCodeAt(0);
  });
  const finalscore = encodedwaifu.reduce((a, b) => a + b, 0) % 11;
  var suggestion = "";
  if (finalscore <= 3) {
    suggestion = "Your waifu is trash, get a new one.";
  } else if (finalscore <= 6) {
    suggestion = "Your waifu is OK.";
  } else if (finalscore <= 9) {
    suggestion = "Your waifu is good.";
  } else {
    suggestion = "Your waifu is amazing.";
  }
  message.channel.send(`I give ${args.join(" ")} a ${finalscore}/10. ${suggestion}`);
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["rwaifu"],
  permLevel: 0,
};

exports.help = {
  name: "ratewaifu",
  description: "Rate your Waifu.",
  usage: "ratewaifu [Waifu Name]",
};