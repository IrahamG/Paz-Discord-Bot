/*This command returns information about the bot and its creator*/ 
const Discord = require('discord.js');
module.exports.run = async(client, message, args) => {
        const infoMessage = new Discord.RichEmbed()
            .setColor('#ff87d9')
            .setAuthor('Informacion tecnica de Paz', client.user.displayAvatarURL, '')
            .setThumbnail(client.user.displayAvatarURL)
            .setDescription('Paz se encuentra actualmente en la versión 0.8.2')
            .addField('Codigo', `\`Lenguaje: Javascript \nLibreria: Node.js | Discord.js\``);
        message.channel.send(infoMessage);
    },


module.exports.config = {
    name: 'info',
    cooldown: 10,
    description: 'Informacion del bot y su creador',
    category: 'misc'
}
