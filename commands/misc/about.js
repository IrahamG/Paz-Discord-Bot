const Discord = require('discord.js');
module.exports.run = async(client, message, args) => {
        const aboutMessage = new Discord.RichEmbed()
            .setColor('#ff87d9')
            .setAuthor('Acerca de Paz', 'https://cdnb.artstation.com/p/assets/images/images/000/194/923/large/fahad-khan-metal-gear-artwork-19597.jpg?1409984106', '')
            .setThumbnail('https://cdnb.artstation.com/p/assets/images/images/000/194/923/large/fahad-khan-metal-gear-artwork-19597.jpg?1409984106')
            .setDescription('Paz es un bot multifuncional, con el objetivo de añadirle funciones al servidor. Desde moderacion hasta diversion, Paz sigue creciendo cada dia.')
            .addField('Creador', 'ChaosNeon#1412', true)
            .addField('Versión', 'REX - 0.7', true)
            .addField('Origen', 'Paz proviene del videojuego Metal Gear Solid: Peace Walker');
        message.channel.send(aboutMessage);
    }


module.exports.config = {
    name: 'about',
    description: 'Informacion acerca de Paz',
    cooldown: 5
}