const Discord = require("discord.js")
const settings = require("../../storage/settings.json");
const color = require("../../storage/settings.json")
const defaultSettings = {
  prefix: "iy>",
  welcomeChannel: "None Set",
  rolelog: "None Set",
  moderationChannel: "None Set",
  welcomeMessage: "**Welcome to {{guild}}, {{user}}! You are the {{count}}th User**"
}

exports.run = (client, message, args) => {
  function emoji (id) {
  return client.emojis.get(id).toString();
}
client.settings.ensure(message.guild.id, defaultSettings);
let gp = client.settings.get(message.guild.id, "prefix")   
  var webs = [
      "[Click]"
  ];
  var votee = [
      "[Click]"
      ];
  var pagee = [
      "[Click]"
      ];
  var support = [
      "[Click]"
      ];
  var invite = [
      "[Click]"
      ];
  var donate = [
      "[Click]"
      ];
    let adminpage = [
      `**<:pyon_inori:606020086502916116> Admin Commands \n\n =================================== \n serverconfig \n prefix <prefix> \n setModerationChannel <ChannelID>\n setWelcomeChannel <ChannelID>\n setMessageLogs <ChannelID> \n setRoleLogs <ChannelID> \n setWelcomeMessage <Message> \n ban <@user> <reason> \n kick <@user> <reason>\n say {say what you want} \n clearmsg {value} \n ===================================**`,
    ];
    let userpage = [
       `**<:what_inori:606025840370778122> User Commands \n\n =================================== \n invite \n help <Command Name> \n avatar \n notice \n ping \n status \n about \n serverinfo \n advice \n why \n osu {username} \n weather {city} \n ===================================**`
    ];
    let musicpage = [
         `**<:sing_inori:606025839829843968> Music Commands \n\n =================================== \n [j] join \n [l] leave \n [p] play {music Name} \n [repeat] loop \n [next] skip \n [np] nowplaying \n [v] volume {value} \n [q] queue \n [animeradio] aniradio \n [jpradio] jpopradio \n [kradio] kpopradio \n [pau] pause \n [s] stop \n [continue] resume \n ===================================**`
    ];
    let funpage = [
         `**<:sigh_inori:606025840018587649> Fun Commands \n\n =================================== \n love {name} \n ship {@user1} {@user2} \n flip \n sexyrate \n wouldyourather \n slots \n fact \n math [Value] \n owo \n rps {rock/paper/scisscors }\n yomama \n rate {message} \n ===================================**`
    ];
    let animepage = [
         `**<:bite_inori:606025840077176832> Anime Commands \n\n =================================== \n [ani] anime {anime name} \n [aninfo] animeinfo {anime name} \n [mgn] manga {manga name} \n [minfo] mangainfo {manga name} \n [anistudio] animestudio {anime studio name} \n [anichr] anicharacter {anime character name} \n [m] moe \n [ameme] animeme \n {wi} weebinfo {@user} \n [swb] setweebbio {bio} \n [sw] setwaifu {waifuname} \n [tsun] tsundere \n [n] neko \n [w] waifu \n [rwaifu] ratewaifu {waifu name} \n ===================================**`
    ];
    let roleplaypage = [
          `**<:isthisfood_inori:606025841562091521> Roleplay Commands \n\n =================================== \n marry {@user} \n divorce {@user} \n grope {@user} \n lewd {@user} \n stare {@user} \n lick {@user} \n holdhands {@user} \n kiss {@user} \n hug {@user} \n pat {@user} \n cuddle {@user} \n wink {@user} \n poke {@user} \n slap {@user} \n tickle {@user} \n nom  {@user} \n kill {@user} \n cry \n ===================================**`
    ];
    let economypage = [
        `**<:smile_inori:606030576805216257> Economy Commands \n\n =================================== \n [balance] money \n [d] daily \n [p] pay {@user} {amount} \n [cf] coinflip {heads/tails} {amount} \n [rt] resetoken \n [resetcd] resetcooldown \n work \n ===================================**`
    ];
    let nsfwpage = [
        `**<:lewd_inori:606027287443406849> N.S.F.W Commands \n\n =================================== \n service \n oppai \n futanari \n ahegao \n hentaigif \n pantsu \n futanari \n lewdneko \n hentai \n pussy \n fendom \n yuri \n blowjob \n trap \n tits \n ===================================**`
    ];
    let pages = [
      `**<:nom_inori:606020087874584588> Page Content\n\n =================================== \n <:nom_inori:606020087874584588> Page Content \n <:pyon_inori:606020086502916116> Admin Commands \n <:what_inori:606025840370778122> User Commands \n <:sing_inori:606025839829843968> Music Commands \n <:sigh_inori:606025840018587649> Fun Commands \n <:bite_inori:606025840077176832> Anime Commands \n <:isthisfood_inori:606025841562091521> Roleplay Commands \n <:smile_inori:606030576805216257> Economy (W.I.P) \n <:lewd_inori:606027287443406849> N.S.F.W. Commands \n ===================================**`
    ];
  let page = 1;
  let ico = message.author.avatarURL
  if(!args[0]){
let helpembed = new Discord.RichEmbed()
    .setTitle(`❯\u2000\Help prefix **${gp}**`)
    .setDescription(pages)
    .addField("**🔗Website/Vote**", `📌**Website **[**${webs}**](https://inori-website.glitch.me) 📌**Support Server** [**${support}**](https://discordapp.com/invite/ER4pzgR) \n 📌**Inori Page **[**${pagee}**](https://discordbots.org/bot/467641216499056660) 📌**Invite** [**${invite}**](https://discordapp.com/oauth2/authorize?client_id=467641216499056660&scope=bot&permissions=1849032063)\n 📌**Vote **[**${votee}**](https://discordbots.org/bot/467641216499056660/vote) 📌**Donate **[**${donate}**](https://donatebot.io/checkout/501387364917182476)`)
    .setFooter(`Page Content`)
    .setThumbnail(ico)
    .setColor(color.inori)
message.channel.send(helpembed).then( msg => {
  msg.delete(120000);
  msg.react('606020087874584588').then(async r => {
    await    msg.react('606020086502916116')
    await    msg.react('606025840370778122')
    await    msg.react('606025839829843968')
    await    msg.react('606025840018587649')
    await    msg.react('606025840077176832')
    await    msg.react('606025841562091521')
    await    msg.react('606030576805216257')
    await    msg.react('606027287443406849')
    
    const pageFilter = (reaction, user) => reaction.emoji.id === '606020087874584588' && user.id === message.author.id;
    const adminFilter = (reaction, user) => reaction.emoji.id === '606020086502916116' && user.id === message.author.id;
    const userFilter = (reaction, user) => reaction.emoji.id === '606025840370778122' && user.id === message.author.id;
    const musicFilter = (reaction, user) => reaction.emoji.id === '606025839829843968' && user.id === message.author.id;
    const funFilter = (reaction, user) => reaction.emoji.id === '606025840018587649' && user.id === message.author.id;
    const animeFilter = (reaction, user) => reaction.emoji.id === '606025840077176832' && user.id === message.author.id;
    const roleplayFilter = (reaction, user) => reaction.emoji.id === '606025841562091521' && user.id === message.author.id;
    const economyFilter = (reaction, user) => reaction.emoji.id === '606030576805216257' && user.id === message.author.id;
    const nsfwFilter = (reaction, user) => reaction.emoji.id === '606027287443406849' && user.id === message.author.id;
      
    

    const page = msg.createReactionCollector(pageFilter, {time: 120000});
    const admin = msg.createReactionCollector(adminFilter, {time: 120000});
    const user = msg.createReactionCollector(userFilter, {time: 120000});
    const music = msg.createReactionCollector(musicFilter, {time: 120000});
    const fun = msg.createReactionCollector(funFilter, {time: 120000});
    const anime = msg.createReactionCollector(animeFilter, {time: 120000});
    const roleplay = msg.createReactionCollector(roleplayFilter, {time: 120000});
    const economy = msg.createReactionCollector(economyFilter, {time: 120000});
    const nsfw = msg.createReactionCollector(nsfwFilter, {time: 120000});
    
    
    page.on('collect', r => {
      helpembed.setDescription(pages);
      helpembed.setFooter(`Page Content`);
      msg.edit(helpembed)
    })
    
    
    admin.on('collect', r => {
      helpembed.setDescription(adminpage);
      helpembed.setFooter(`Admin Commands`);
      helpembed.setFooter(`Note: Join Support Server to ask help with the New Server Config.`);
      msg.edit(helpembed)
    })
    
    user.on('collect', r => {
      helpembed.setDescription(userpage);
      helpembed.setFooter(`User Commands`);
      msg.edit(helpembed)
    })
    music.on('collect', r => {
      helpembed.setDescription(musicpage);
      helpembed.setFooter(`Music Commands`);
      msg.edit(helpembed)
    })
    fun.on('collect', r => {
      helpembed.setDescription(funpage);
      helpembed.setFooter(`Fun Commands`);
      msg.edit(helpembed)
    })
    anime.on('collect', r => {
      helpembed.setDescription(animepage);
      helpembed.setFooter(`Anime Commands`);
      msg.edit(helpembed)
    })
    roleplay.on('collect', r => {
      helpembed.setDescription(roleplaypage);
      helpembed.setFooter(`Roleplay Commands`);
      msg.edit(helpembed)
    })
    economy.on('collect', r => {
      helpembed.setDescription(economypage);
      helpembed.setFooter(`Note: Vote for Inori you will Receive ¥1000 and Tokens.`);
      msg.edit(helpembed)
    })
    nsfw.on('collect', r => {
      helpembed.setDescription(nsfwpage);
      helpembed.setFooter(`NSFW Commands`);
      msg.edit(helpembed)
    })
  })
})
} else {
  let command = args[0];
  if(client.commands.get(command)) {
  command = client.commands.get(command); 
  let hembed = new Discord.RichEmbed()
    .setTitle(`Help iy>${command.help.name}`)
    .setDescription(`
**===================================**\n
**Command Name:** ${command.help.name}\n
**Command Description:** ${command.help.description}\n
**Command Usage:** ${command.help.usage}\n
**Command Aliases:** ${command.conf.aliases}\n
**===================================**`)
    .setFooter(`Help ${command.help.name}`)
    .setThumbnail(ico)
    .setColor(color.inori)
  message.channel.send(hembed)
  }
}
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["h"],
  permLevel: 0,
};

exports.help = {
  name: "help",
  description: "Open Help Message",
  usage: "help [Command Name]",
};