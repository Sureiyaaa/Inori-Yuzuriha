const Discord = require("discord.js");
const config = require("../../storage/settings.json");
const Kitsu = require('kitsu.js');
const kitsu = new Kitsu();
var aq = require('animequote');
const color = require("../../storage/settings.json")
exports.run = (client, message, args) => {
    var search = message.content.split(/\s+/g).slice(1).join(" ");
    if (!search) {
        kitsu.searchAnime(aq().quoteanime).then(result => {
            var anime = result[0]
            let embed = new Discord.RichEmbed()
                .setColor(color.inori)
                .setAuthor(`${anime.titles.english} | ${anime.showType}`, anime.posterImage.original)
                .setDescription(anime.synopsis.replace(/<[^>]*>/g, '').split('\n')[0])
                .addField('❯\u2000\Information', `•\u2000\**Japanese Name:** ${anime.titles.romaji}\n\•\u2000\**Age Rating:** ${anime.ageRating}\n\•\u2000\**Genre:** ${anime.genre}`, true)
                .addField('❯\u2000\Stats', `•\u2000\**Average Rating:** ${anime.averageRating}\n\•\u2000\**Rating Rank:** ${anime.ratingRank}\n\•\u2000\**Popularity Rank:** ${anime.popularityRank}`, true)
                .addField('❯\u2000\Status', `•\u2000\**Episodes:** ${anime.episodeCount ? anime.episodeCount : 'N/A'}\n\•\u2000\**Start Date:** ${anime.startDate}\n\•\u2000\**End Date:** ${anime.endDate ? anime.endDate : "Still airing"}`, true)
                .setImage(anime.posterImage.original);
            return message.channel.send(`Try watching **${anime.titles.english}**!`, { embed: embed });
        })

    } else {
        var search = message.content.split(/\s+/g).slice(1).join(" ");
        kitsu.searchAnime(search).then(result => {
            if (result.length === 0) {
                return message.channel.send(`No results found for **${search}**!`);
            }
            var anime = result[0]
            let embed = new Discord.RichEmbed()
                .setColor(color.inori)
                .setAuthor(`${anime.titles.english ? anime.titles.english : search} | ${anime.showType}`, anime.posterImage.original)
                .setDescription(anime.synopsis.replace(/<[^>]*>/g, '').split('\n')[0])
                .addField('❯\u2000\Information', `•\u2000\**Japanese Name:** ${anime.titles.romaji}\n\•\u2000\**Age Rating:** ${anime.ageRating}`, true)
                .addField('❯\u2000\Stats', `•\u2000\**Average Rating:** ${anime.averageRating}\n\•\u2000\**Rating Rank:** ${anime.ratingRank}\n\•\u2000\**Popularity Rank:** ${anime.popularityRank}`, true)
                .addField('❯\u2000\Status', `•\u2000\**Episodes:** ${anime.episodeCount ? anime.episodeCount : 'N/A'}\n\•\u2000\**Start Date:** ${anime.startDate}\n\•\u2000\**End Date:** ${anime.endDate ? anime.endDate : "Still airing"}`, true)
                .setImage(anime.posterImage.original)
                .setFooter("Inori Yuzuriha Anime Search")
            return message.channel.send({ embed });
        }).catch(err => {
            console.log(err)
            let embednone = new Discord.RichEmbed()
            .setTitle("**No Results!**")
            .setDescription(`No results found for **${search}**!`)
            return message.channel.send(embednone);
        });
    }

}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["aninfo"],
  permLevel: 0,
};

exports.help = {
  name: "animeinfo",
  description: "Anime Full Information",
  usage: "animeinfo [Anime Name]",
};
