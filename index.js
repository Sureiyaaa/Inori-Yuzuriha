const Discord = require('discord.js');
const settings = require("./storage/settings.json");
const Enmap = require("enmap");
const color = require("./storage/settings.json")
const client = new Discord.Client({ forceFetchUsers: true });
const fs = require('fs');
require("./storage/eventLoader")(client);
require("dotenv").config();
client.config = settings;

client.settings = new Enmap({
  name: "settings",
  fetchAll: false,
  autoFetch: true,
  cloneLevel: 'deep'
});
const defaultSettings = {
  prefix: "iy>",
  welcomeChannel: "None Set",
  rolelog: "None Set",
  moderationChannel: "None Set",
  messageLogs: "None Set",
  welcomeMessage: "**Welcome to {{guild}}, {{user}}! You are the {{count}}th User**"
}

client.queue = new Map();
client.commands = new Enmap();

client.elevation = message => {
 
  const adminRole = message.guild.roles.find("name", settings.adminRoleName);

  
  if (adminRole && message.member.roles.has(adminRole.id)) {
    return 10;
  }


  if (message.member.permissions.has("MANAGE_MESSAGES")) {
    return 1;
  }


  return 0;
};
client.aliases = new Discord.Collection();

fs.readdir("./commands/Owner/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/Owner/${file}`);
    let commandName = file.split(".")[0];
    console.log(`[${new Date().toLocaleString()}] Loading Owner Command > ${commandName}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
    client.aliases.set(alias, props.help.name);
    });
  });
});
fs.readdir("./commands/Information/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/Information/${file}`);
    let commandName = file.split(".")[0];
    console.log(`[${new Date().toLocaleString()}] Loading Information Command > ${commandName}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
    client.aliases.set(alias, props.help.name);
    });
  });
});
fs.readdir("./commands/Administrator/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/Administrator/${file}`);
    let commandName = file.split(".")[0];
    console.log(`[${new Date().toLocaleString()}] Loading Administrator Command > ${commandName}`);
    client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

fs.readdir("./commands/User/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/User/${file}`);
    let commandName = file.split(".")[0];
    console.log(`[${new Date().toLocaleString()}] Loading User Command > ${commandName}`);
    client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

fs.readdir("./commands/Music/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/Music/${file}`);
    let commandName = file.split(".")[0];
    console.log(`[${new Date().toLocaleString()}] Loading Music Command > ${commandName}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});
fs.readdir("./commands/Fun/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/Fun/${file}`);
    let commandName = file.split(".")[0];
    console.log(`[${new Date().toLocaleString()}] Loading Fun Command > ${commandName}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});
fs.readdir("./commands/Anime/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/Anime/${file}`);
    let commandName = file.split(".")[0];
    console.log(`[${new Date().toLocaleString()}] Loading Anime Command > ${commandName}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
    client.aliases.set(alias, props.help.name);
    });
  });
});
fs.readdir("./commands/Roleplay/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/Roleplay/${file}`);
    let commandName = file.split(".")[0];
    console.log(`[${new Date().toLocaleString()}] Loading Roleplay Command > ${commandName}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
    client.aliases.set(alias, props.help.name);
    });
  });
});
fs.readdir("./commands/Economy/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/Economy/${file}`);
    let commandName = file.split(".")[0];
    console.log(`[${new Date().toLocaleString()}] Loading Roleplay Command > ${commandName}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
    client.aliases.set(alias, props.help.name);
    });
  });
});
fs.readdir("./commands/NSFW/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/NSFW/${file}`);
    let commandName = file.split(".")[0];
    console.log(`[${new Date().toLocaleString()}] Loading NSFW Command > ${commandName}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
    client.aliases.set(alias, props.help.name);
    });
  });
});

client.login(settings.token);
