//Regresa un mensaje con los cambios de la version principal.
const Discord = require('discord.js');
module.exports.run = async(client, message, args) => {
        const changeMessage = new Discord.RichEmbed()
            .setColor('#ff87d9')
            .setAuthor('Changelog', client.user.displayAvatarURL, '')
            .setThumbnail(client.user.displayAvatarURL)
            .addField('Cambios en la version 0.8.2 | Codename: REX', 
                `+Nuevos comando: \`donate\`. 
                \n+Cambios en el comando de \`waifu\`, otra vez.
                \n+Cambios menores en otros comandos.`)
            .addField('Para una lista completa de cambios visita:', '[Neon Bots](http://chaosneon.weebly.com)')
            .setFooter('ChaosNeon | 2019 - 2020');
        message.channel.send(changeMessage);
    }

module.exports.config = {
    name: 'changelog',
    description: 'Muestra la lista de cambios de la version actual',
    category: 'misc',
    cooldown: 5
}