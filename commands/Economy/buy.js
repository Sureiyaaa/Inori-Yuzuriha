const Discord = require("discord.js")
const db = require("quick.db");
const color = require("../../storage/settings.json")
exports.run = async (client, message, args) => {
      message.delete().catch();
    let member = db.fetch(`userBalance_${message.author.id}`)
    if(member === null) member = 0;
  
    if (message.channel.id !== "633296566534406176") {
            message.delete().catch();
    const shopRoom = message.guild.channels.find("id", "633296566534406176");
    const embed = new Discord.RichEmbed()
    .setDescription(`**You cannot use this Command in this Channel go to ** ${shopRoom}`)
    .setColor(color.inori)
    message.channel.send(embed).then(m => m.delete(5000));
  }
  
    if (args[0] == 'Senpai') {
        if (!message.guild.roles.find("name", 'Senpai')) return message.channel.send('I could not find a role by the name of `Senpai`, check with the owners.')
        if (member < 50000) return message.channel.send('You need atleast `¥50000` to purchase the Senpai role.')
        
        message.guild.members.get(message.author.id).addRole(message.guild.roles.find("name", 'Senpai'))

        db.subtract(`userBalance_${message.author.id}`, 50000)
        message.channel.send(message.author.tag + ' You successfully bought the Senpai role for `¥50,000`').then(m => m.delete(10000));

    } else if(args[0] == 'Lolicon') {
        if (!message.guild.roles.find("name", 'Lolicon')) return message.channel.send('I could not find a role by the name of `Lolicon`, check with the owners.')
        if (member < 70000) return message.channel.send('You need atleast `¥70,000` to purchase the Lolicon role.')
        message.guild.members.get(message.author.id).addRole(message.guild.roles.find("name", 'Lolicon')) 

        db.subtract(`userBalance_${message.author.id}`, 70000)
        message.channel.send(message.author.tag + ' You successfully bought the Lolicon role for `¥70,000`').then(m => m.delete(10000));

    }  else if(args[0] == 'Kawaii') {
        if (!message.guild.roles.find("name", 'Kawaii')) return message.channel.send('I could not find a role by the name of `Kawaii`, check with the owners.')
        if (member < 80000) return message.channel.send('You need atleast `¥80,000` to purchase the Kawaii role.')
        message.guild.members.get(message.author.id).addRole(message.guild.roles.find("name", 'Kawaii')) 

        db.subtract(`userBalance_${message.author.id}`, 80000)
        message.channel.send(message.author.tag + ' You successfully bought the Kawaii role for `¥100,000`').then(m => m.delete(10000));

    } else if(args[0] == 'Neko') {
        if (!message.guild.roles.find("name", 'Neko')) return message.channel.send('I could not find a role by the name of `Neko`, check with the owners.')
        if (member < 100000) return message.channel.send('You need atleast `¥100,000` to purchase the Neko role.')
        message.guild.members.get(message.author.id).addRole(message.guild.roles.find("name", 'Neko'))

        db.subtract(`userBalance_${message.author.id}`, 100000)
        message.channel.send(message.author.tag + ' You successfully bought the Neko role for `¥100,000`').then(m => m.delete(10000));

    } else if(args[0] == 'Weeb') {
        if (!message.guild.roles.find("name", 'Weeb')) return message.channel.send('I could not find a role by the name of `Weeb`, check with the owners.')
        if (member < 100000) return message.channel.send('You need atleast `¥100,000` to purchase the Weeb role.')
        message.guild.members.get(message.author.id).addRole(message.guild.roles.find("name", 'Weeb')) 

        db.subtract(`userBalance_${message.author.id}`, 100000)
        message.channel.send(message.author.tag + ' You successfully bought the Weeb role for `¥100,000`').then(m => m.delete(10000));

    } else if(args[0] == 'Loli') {
        if (!message.guild.roles.find("name", 'Loli')) return message.channel.send('I could not find a role by the name of `Loli`, check with the owners.')
        if (member < 120000) return message.channel.send('You need atleast `¥120,000` to purchase the Loli role.')
        message.guild.members.get(message.author.id).addRole(message.guild.roles.find("name", 'Loli')) 

        db.subtract(`userBalance_${message.author.id}`, 120000)
        message.channel.send(message.author.tag + ' You successfully bought the Loli role for `¥120,000`').then(m => m.delete(10000));

    } else if(args[0] == 'Artist') {
        if (!message.guild.roles.find("name", 'Artist')) return message.channel.send('I could not find a role by the name of `Artist`, check with the owners.')
        if (member < 120000) return message.channel.send('You need atleast `¥120,000` to purchase the Artist role.')
        message.guild.members.get(message.author.id).addRole(message.guild.roles.find("name", 'Artist')) 

        db.subtract(`userBalance_${message.author.id}`, 120000)
        message.channel.send(message.author.tag + ' You successfully bought the Artist role for `¥120,000`').then(m => m.delete(10000));

    } else if(args[0] == 'Programmer') {
        if (!message.guild.roles.find("name", 'Programmer')) return message.channel.send('I could not find a role by the name of `Programmer`, check with the owners.')
        if (member < 120000) return message.channel.send('You need atleast `¥120,000` to purchase the Programmer role.')
        message.guild.members.get(message.author.id).addRole(message.guild.roles.find("name", 'Programmer')) 

        db.subtract(`userBalance_${message.author.id}`, 120000)
        message.channel.send(message.author.tag + ' You successfully bought the Programmer role for `¥120,000`').then(m => m.delete(10000));

    } else if(args[0] == 'Lolifan') {
        if (!message.guild.roles.find("name", 'Lolifan')) return message.channel.send('I could not find a role by the name of `Lolifan`, check with the owners.')
        if (member < 120000) return message.channel.send('You need atleast `¥120,000` to purchase the Lolifan role.')
        message.guild.members.get(message.author.id).addRole(message.guild.roles.find("name", 'Lolifan')) 

        db.subtract(`userBalance_${message.author.id}`, 120000)
        message.channel.send(message.author.tag + ' You successfully bought the Lolifan role for `¥120,000`').then(m => m.delete(10000));

    } else if(args[0] == 'Assassin') {
        if (!message.guild.roles.find("name", 'Assassin')) return message.channel.send('I could not find a role by the name of `Assassin`, check with the owners.')
        if (member < 150000) return message.channel.send('You need atleast `¥150,000` to purchase the Assassin role.')
        message.guild.members.get(message.author.id).addRole(message.guild.roles.find("name", 'Assassin')) 

        db.subtract(`userBalance_${message.author.id}`, 150000)
        message.channel.send(message.author.tag + ' You successfully bought the Assassin role for `¥150,000`').then(m => m.delete(10000));

    } else if(args[0] == 'Maou') {
        if (!message.guild.roles.find("name", 'Maou')) return message.channel.send('I could not find a role by the name of `Maou`, check with the owners.')
        if (member < 150000) return message.channel.send('You need atleast `¥150,000` to purchase the Maou role.')
        message.guild.members.get(message.author.id).addRole(message.guild.roles.find("name", 'Maou')) 

        db.subtract(`userBalance_${message.author.id}`, 150000)
        message.channel.send(message.author.tag + ' You successfully bought the Assassin role for `¥150,000`').then(m => m.delete(10000));

    } else if(args[0] == 'King') {
        if (!message.guild.roles.find("name", 'King')) return message.channel.send('I could not find a role by the name of `King`, check with the owners.')
        if (member < 250000) return message.channel.send('You need atleast `¥250,000` to purchase the King role.')
        message.guild.members.get(message.author.id).addRole(message.guild.roles.find("name", 'King')) 

        db.subtract(`userBalance_${message.author.id}`, 250000)
        message.channel.send(message.author.tag + ' You successfully bought the King role for `¥250,000`').then(m => m.delete(10000));

    }else if(args[0] == 'LoliKing') {
        if (!message.guild.roles.find("name", 'Loli King')) return message.channel.send('I could not find a role by the name of `Loli King`, check with the owners.')
        if (member < 260000) return message.channel.send('You need atleast `¥260,000` to purchase the Loli King role.')
        message.guild.members.get(message.author.id).addRole(message.guild.roles.find("name", 'Loli King')) 

        db.subtract(`userBalance_${message.author.id}`, 260000)
        message.channel.send(message.author.tag + ' You successfully bought the King role for `¥260,000`').then(m => m.delete(10000));

    }else if(args[0] == 'DemonKing') {
        if (!message.guild.roles.find("name", 'Demon King')) return message.channel.send('I could not find a role by the name of `Demon King`, check with the owners.')
        if (member < 300000) return message.channel.send('You need atleast `¥300,000` to purchase the Demon King role.')
        message.guild.members.get(message.author.id).addRole(message.guild.roles.find("name", 'Demon King')) 

        db.subtract(`userBalance_${message.author.id}`, 300000)
        message.channel.send(message.author.tag + ' You successfully bought the Demon King role for `¥400,000`').then(m => m.delete(10000));

    }else if(args[0] == 'S') {
        if (!message.guild.roles.find("name", '≔≫Rank S≪≕')) return message.channel.send('I could not find a role by the name of `≔≫Rank S≪≕`, check with the owners.')
        if (member < 400000) return message.channel.send('You need atleast `¥400,000` to purchase the ≔≫Rank S≪≕ role.')
        message.guild.members.get(message.author.id).addRole(message.guild.roles.find("name", '≔≫Rank S≪≕')) 

        db.subtract(`userBalance_${message.author.id}`, 400000)
        message.channel.send(message.author.tag + ' You successfully bought the ≔≫Rank S≪≕ role for `¥400,000`').then(m => m.delete(10000));

    }else if(args[0] == 'A') {
        if (!message.guild.roles.find("name", '≔≫Rank A≪≕')) return message.channel.send('I could not find a role by the name of `≔≫Rank A≪≕`, check with the owners.')
        if (member < 300000) return message.channel.send('You need atleast `¥300,000` to purchase the ≔≫Rank A≪≕ role.')
        message.guild.members.get(message.author.id).addRole(message.guild.roles.find("name", '≔≫Rank A≪≕')) 

        db.subtract(`userBalance_${message.author.id}`, 300000)
        message.channel.send(message.author.tag + ' You successfully bought the ≔≫Rank A≪≕ role for `¥300,000`').then(m => m.delete(10000));

    }else if(args[0] == 'B') {
        if (!message.guild.roles.find("name", '≔≫Rank B≪≕')) return message.channel.send('I could not find a role by the name of `≔≫Rank A≪≕`, check with the owners.')
        if (member < 250000) return message.channel.send('You need atleast `¥250,000` to purchase the ≔≫Rank B≪≕ role.')
        message.guild.members.get(message.author.id).addRole(message.guild.roles.find("name", '≔≫Rank B≪≕')) 

        db.subtract(`userBalance_${message.author.id}`, 250000)
        message.channel.send(message.author.tag + ' You successfully bought the ≔≫Rank B≪≕ role for `250,000`').then(m => m.delete(10000));

    }else if(args[0] == 'C') {
        if (!message.guild.roles.find("name", '≔≫Rank C≪≕')) return message.channel.send('I could not find a role by the name of `≔≫Rank C≪≕`, check with the owners.')
        if (member < 150000) return message.channel.send('You need atleast `¥150,000` to purchase the ≔≫Rank C≪≕ role.')
        message.guild.members.get(message.author.id).addRole(message.guild.roles.find("name", '≔≫Rank C≪≕')) 

        db.subtract(`userBalance_${message.author.id}`, 150000)
        message.channel.send(message.author.tag + ' You successfully bought the ≔≫Rank C≪≕ role for `¥150,000`').then(m => m.delete(10000));

    }else if(args[0] == 'D') {
        if (!message.guild.roles.find("name", '≔≫Rank D≪≕')) return message.channel.send('I could not find a role by the name of `≔≫Rank D≪≕`, check with the owners.')
        if (member < 80000) return message.channel.send('You need atleast `¥80,000` to purchase the ≔≫Rank D≪≕ role.')
        message.guild.members.get(message.author.id).addRole(message.guild.roles.find("name", '≔≫Rank D≪≕')) 

        db.subtract(`userBalance_${message.author.id}`, 80000)
        message.channel.send(message.author.tag + ' You successfully bought the ≔≫Rank D≪≕ role for `¥80,000`').then(m => m.delete(10000));

    }else if(args[0] == 'E') {
        if (!message.guild.roles.find("name", '≔≫Rank E≪≕')) return message.channel.send('I could not find a role by the name of `≔≫Rank E≪≕`, check with the owners.')
        if (member < 30000) return message.channel.send('You need atleast `¥30,000` to purchase the ≔≫Rank E≪≕ role.')
        message.guild.members.get(message.author.id).addRole(message.guild.roles.find("name", '≔≫Rank E≪≕')) 

        db.subtract(`userBalance_${message.author.id}`, 30000)
        message.channel.send(message.author.tag + ' You successfully bought the ≔≫Rank E≪≕ role for `¥30,000`').then(m => m.delete(10000));

    }else if(args[0] == 'F') {
        if (!message.guild.roles.find("name", '≔≫Rank F≪≕')) return message.channel.send('I could not find a role by the name of `≔≫Rank F≪≕`, check with the owners.')
        if (member < 500) return message.channel.send('You need atleast `¥500` to purchase the ≔≫Rank F≪≕ role.')
        message.guild.members.get(message.author.id).addRole(message.guild.roles.find("name", '≔≫Rank F≪≕')) 

        db.subtract(`userBalance_${message.author.id}`, 500)
        message.channel.send(message.author.tag + ' You successfully bought the ≔≫Rank F≪≕ role for `¥500`').then(m => m.delete(10000));
    }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["buy"],
  permLevel: 0,
};

exports.help = {
  name: "buy",
  description: "Shop for Inori Cafe",
  usage: "buy",
};
