const Discord = require('discord.js');
module.exports.run = async(client, message, args) => {
        const changeMessage = new Discord.RichEmbed()
            .setColor('#ff87d9')
            .setAuthor('Changelog', 'https://cdnb.artstation.com/p/assets/images/images/000/194/923/large/fahad-khan-metal-gear-artwork-19597.jpg?1409984106', '')
            .setThumbnail('https://cdnb.artstation.com/p/assets/images/images/000/194/923/large/fahad-khan-metal-gear-artwork-19597.jpg?1409984106')
            .addField('Cambios en la version 0.7 | Codename: REX', 
                `+Nuevos comandos: \`dice\`, \`mute\`, \`unmunte\`, y \`changelog\`. 
                \n+Nuevas waifus añadidas al comando waifu.
                \n+Se ha cambiado el motor de manejo de comandos, mejorando un poco la optimizacion.
                \n+Se han modificado los comandos para adaptarse al nuevo motor. 
                \n-Comando play deshabilitado temporalmente`)
            .setFooter('ChaosNeon | 2019 - 2020');
        message.channel.send(changeMessage);
    }

module.exports.config = {
    name: 'changelog',
    description: 'Muestra la lista de cambios de la version actual',
    cooldown: 5
}