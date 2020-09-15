const toMarkdown = require("to-markdown");
const anilistLogo = "https://cdn.discordapp.com/avatars/467641216499056660/b14aabee25e4cbb3c68cfbd059dd7d19.png";

const pipe = (op1, op2) => arg => op2(op1(arg));

const removeSpoilers = str => str.replace(/<span[^>]*>.*<\/span>/g, "");

const shorten = str => {
    const markdown = toMarkdown(str);
    if (markdown.length > 400) {
        return markdown.substring(0, 400) + "...";
    } else {
        return markdown;
    }
};

const discordMessage = ({
    name,
    url,
    imageUrl,
    description,
    footer,
    title
} = {}) => {
    return {
        title: title,
        author: {
            name: name,
            url: url,
            icon_url: anilistLogo
        },
        thumbnail: {
            url: imageUrl
        },
        description: pipe(
            removeSpoilers,
            shorten
        )(description),
        footer: {
            text: footer
        }
      
    };
};

module.exports = discordMessage;