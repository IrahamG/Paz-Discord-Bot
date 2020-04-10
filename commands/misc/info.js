/*This command returns information about the bot and its creator*/ 
const Discord = require('discord.js');
module.exports.run = async(client, message, args) => {
        const infoMessage = new Discord.RichEmbed()
            .setColor('#ff87d9')
            .setAuthor('Información técnica de Paz', client.user.displayAvatarURL, '')
            .setThumbnail(client.user.displayAvatarURL)
            .setDescription('Paz se encuentra actualmente en la versión 0.9.1')
            .addField('Código', `\`Lenguaje: Javascript \nLibreria: Node.js | Discord.js\``);
        message.channel.send(infoMessage);
    },


module.exports.config = {
    name: 'info',
    cooldown: 10,
    description: 'Información del bot y su creador',
    category: 'misc'
}
