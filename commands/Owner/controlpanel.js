const Discord = require("discord.js")
const settings = require("../../storage/settings.json");
const ownerID = "341577240934613004";
const color = require("../../storage/settings.json")
let cpuusage = process.cpuUsage();
let cpu = Math.floor(cpuusage.user/cpuusage.system) + "%";
var upSecs = 0;
var upMins = 0;
var upHours = 0;
var upDays = 0;
var upWeeks = 0;
setInterval(function() {
    upSecs = upSecs + 1
    if (upSecs >= 60) {
        upSecs = 0
        upMins = upMins + 1
    }
    if (upMins >= 60) {
        upMins = 0
        upHours = upHours + 1
    }
    if (upHours >= 24) {
        upHours = 0
        upDays = upDays + 1
    }
    if (upDays >= 7) {
      upDays = 0
      upWeeks = upWeeks + 1
    }
}, 1000)
exports.run = (client, message, args) => {
      let ico = client.user.avatarURL
    let API = (client.ping).toFixed(2)
let stats = [
    `\`\`\`diff\n
-                  Inori Status                -
- Users      :: ${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}
- Servers    :: ${client.guilds.size.toLocaleString()}
- Channels   :: ${client.channels.size.toLocaleString()}
- Uptime     :: ${upWeeks}W,${upDays}D, ${upHours}H, ${upMins}M ${upSecs}S

-                  Inori Usage                 -

- Ping       :: ${new Date().getTime() - message.createdTimestamp} ms
- API        :: ${API} ms
- Cpu Usage  :: ${cpu} / 100%
- RSS        :: ${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)}
- Heap Used  :: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB / 4 GB
-
- OS         :: Ubuntu 18.04
- Discord.js :: v11.5.1
- Node.js    :: v12.9.1\`\`\``
    ]

    if (message.author.id !== ownerID) return message.channel.send("You are not authorized to use this command.");
  let page = 1;

let helpembed = new Discord.RichEmbed()
    .setTitle("❯\u2000\Control Panel")
    .setDescription(`**Sureiya-sama Welcome to My Control Panel. \n\n <:ohno_inori:631487860947681301> Control Panel Page \n <:angry_inori:631487861430157312> Reboot \n <:sleepy_inori:631487861425963033> Status **`)
    .setColor(color.inori)
    .setThumbnail(ico)
message.channel.send(helpembed).then(msg => {
    msg.delete(120000);
  msg.react('631487860947681301').then(async r => {
    await  msg.react(`631487861430157312`)
    await  msg.react(`631487861425963033`)
    const pageFilter = (reaction, user) => reaction.emoji.id === '631487861430157312' && user.id === message.author.id;
    const statFilter = (reaction, user) => reaction.emoji.id === '631487861425963033' && user.id === message.author.id;
    const homeFilter = (reaction, user) => reaction.emoji.id === '631487860947681301' && user.id === message.author.id;
    const statpage = msg.createReactionCollector(statFilter, {time: 120000});
    const page = msg.createReactionCollector(pageFilter, {time: 120000});
    const homepage = msg.createReactionCollector(homeFilter, {time: 120000});
    
    page.on('collect', r => {
     helpembed.setDescription(`**Sureiya-sama Welcome to My Control Panel/Status \n\nRebooting :red_circle: :yellow_circle: :green_circle:**`);
     helpembed.setFooter(`Rebooting in 5 Seconds`);
    msg.edit(helpembed)

  setTimeout(() => {
    process.exit(1);
  }, 5000);
    })
    statpage.on('collect', r => {
      helpembed.setDescription(stats);
      helpembed.setFooter(`My Status`);
      msg.edit(helpembed)

    })
    homepage.on('collect', r => {
      helpembed.setDescription(`**Sureiya-sama Welcome to My Control Panel/Status \n\n <:ohno_inori:631487860947681301> Control Panel Page \n <:angry_inori:631487861430157312> Reboot \n <:sleepy_inori:631487861425963033> Status **`);
      msg.edit(helpembed)
    })
  })
})
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["cp"],
  permLevel: 0,
};

exports.help = {
  name: "controlpanel",
  description: "controlpanel",
  usage: "controlpanel",
};