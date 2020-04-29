/*This command returns information about the bot and its creator*/ 
const Discord = require('discord.js');
module.exports.run = async(client, message, args) => {
        const infoMessage = new Discord.RichEmbed()
            .setColor('#ff87d9')
            .setAuthor('Acerca de Paz', client.user.displayAvatarURL, '')
            .setThumbnail(client.user.displayAvatarURL)
            .setDescription('Paz es un bot multifuncional, con el objetivo de añadirle funciones al servidor. Desde moderacion hasta diversión, Paz sigue creciendo cada dia.')
            .addField('Creador', `\`ChaosNeon#1412\``, true)
            .addField('Versión', 'ZEKE - 1.0.2', true)
            .addField('Sitio web', `[TBH](http://chaosneon.weebly.com)`, true)
            .addField('Código', `\`Lenguaje: Javascript \nLibreria: Node.js | Discord.js\``)
            .addField('Testers de Paz', `\`DantePelagatos#7716\`\n
            \`juandestructor#3954\`\n
            \`Tommcool_2020#8570\`\n
            \`Itz_Shadow2020#3107\``, true)
            .addField('Origen', 'Paz proviene del videojuego Metal Gear Solid: Peace Walker')
            .setFooter(`© Paz Bot | Commandos totales: ${client.commands.size}`, client.user.displayAvatarURL);
        message.channel.send(infoMessage);
    },


module.exports.config = {
    name: 'info',
    cooldown: 10,
    description: 'Información acerca de Paz',
    category: 'misc'
}
