const Discord = require('discord.js');
module.exports.run = async(client, message, args) => {
        const changeMessage = new Discord.RichEmbed()
            .setColor('#ff87d9')
            .setAuthor('Changelog', client.user.displayAvatarURL, '')
            .setThumbnail(client.user.displayAvatarURL)
            .addField('Cambios en la version 0.6 | Codename: REX', 
                `+Nuevos comandos: \`dice\`, \`mute\`, \`unmunte\`, y \`changelog\`. 
                \n+Se ha cambiado el motor de manejo de comandos, mejorando la optimizacion.
                \n+Se han modificado los comandos para adaptarse al nuevo motor. 
                \n+El comando de paz!help ha sido modificado.
                \n-Comando play deshabilitado *temporalmente*`)
            .setFooter('ChaosNeon | 2019 - 2020');
        message.channel.send(changeMessage);
    }

module.exports.config = {
    name: 'changelog',
    description: 'Muestra la lista de cambios de la version actual',
    category: 'misc',
    cooldown: 5
}