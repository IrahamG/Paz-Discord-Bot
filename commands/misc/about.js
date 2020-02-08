const Discord = require('discord.js');
module.exports.run = async(client, message, args) => {
        const aboutMessage = new Discord.RichEmbed()
            .setColor('#ff87d9')
            .setAuthor('Acerca de Paz', client.user.displayAvatarURL, '')
            .setThumbnail(client.user.displayAvatarURL)
            .setDescription('Paz es un bot multifuncional, con el objetivo de añadirle funciones al servidor. Desde moderacion hasta diversion, Paz sigue creciendo cada dia.')
            .addField('Creador', 'ChaosNeon#1412', true)
            .addField('Versión', 'REX - 0.6.2', true)
            .addField('Origen', 'Paz proviene del videojuego Metal Gear Solid: Peace Walker')
            .setFooter(`© Paz Bot | Commandos totales: ${client.commands.size}`, client.user.displayAvatarURL);
        message.channel.send(aboutMessage);
    }


module.exports.config = {
    name: 'about',
    description: 'Informacion acerca de Paz',
    category: 'misc',
    cooldown: 5
}