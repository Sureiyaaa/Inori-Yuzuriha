const Discord = require("discord.js")
const db = require("quick.db");
const color = require("../../storage/settings.json")
exports.run = async (client, message, args) => {
          message.delete().catch();
    let member = db.fetch(`userBalance_${message.author.id}`)
    if(member === null) member = 0;
  
    let pages1 = [
      `**<:blush_inori:631493102955397140> **Shop**\n\n =================================== \n **📄 Home Page \n🛍 Role Shop \n⏫ Ranks**\n ===================================**`
    ];
    let pages3 = [
      `**<:blush_inori:631493102955397140> **Ranks**\n\n =================================== \n**Rank F ¥500\nRank E ¥30,000\nRank D ¥80,000\nRank C ¥150,000\nRank B ¥250,000\nRank A ¥300,000\nRank S ¥400,000**\n\n ===================================**`
    ];
     let pages2 = [
      `**<:blush_inori:631493102955397140> **Roles**\n\n =================================== \n**Senpai ¥50,000\nLolicon ¥70,000\nKawaii ¥80,000\nNeko ¥100,000\nWeeb ¥100,000\nLoli ¥120,000\nArtist ¥120,000\nProgrammer ¥120,000\nLolifan ¥120,000\nAssassin ¥150,000\nMaou ¥150,000\nKing ¥250,000\nLoliKing ¥260,000\nDemonKing ¥300,000**\n ===================================**`
    ];
  
    if (message.channel.id !== "633296566534406176") {
            message.delete().catch();
    const shopRoom = message.guild.channels.find("id", "633296566534406176");
    const embed = new Discord.RichEmbed()
    .setDescription(`**You cannot use this Command in this Channel go to ** ${shopRoom}`)
    .setFooter("This Role shop is Exclusively in Inori Yuzuriha Cafe!")
    .setColor(color.inori)
    message.channel.send(embed).then(m => m.delete(5000));
  } else {
  const helpembed = new Discord.RichEmbed()
  .setTitle("Inori Cafe Role Shop! ``iy>buy role-name``")
  .setDescription(pages1)
  .setFooter(`Role Shop| You Have: ¥${member}`)
  .setColor(color.inori)
  message.channel.send(helpembed).then( msg => {
  msg.delete(120000);
  msg.react('📄').then(async r => {
await    msg.react('🛍')
await    msg.react('⏫')
    
    const page1Filter = (reaction, user) => reaction.emoji.name === '📄' && user.id === message.author.id;
    const page2Filter = (reaction, user) => reaction.emoji.name === '🛍' && user.id === message.author.id;
    const page3Filter = (reaction, user) => reaction.emoji.name === '⏫' && user.id === message.author.id;
    
    const page = msg.createReactionCollector(page1Filter, {time: 120000});
    const admin = msg.createReactionCollector(page2Filter, {time: 120000});
    const user = msg.createReactionCollector(page3Filter, {time: 120000});
    
        
    page.on('collect', r => {
      helpembed.setDescription(pages1);
      helpembed.setFooter(`Role Shop| You Have: ¥${member}`)
      msg.edit(helpembed)
    })
        admin.on('collect', r => {
      helpembed.setDescription(pages2);
      helpembed.setFooter("iy>buy DemonKing")
      msg.edit(helpembed)
    })
          user.on('collect', r => {
      helpembed.setDescription(pages3);
      helpembed.setFooter("iy>buy S/A/B/C/D/E/F")
      msg.edit(helpembed)
    })
  })
  })
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["shop"],
  permLevel: 0,
};

exports.help = {
  name: "shop",
  description: "Shop for Inori Cafe",
  usage: "shop",
};
