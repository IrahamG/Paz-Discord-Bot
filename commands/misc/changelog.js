//Regresa un mensaje con los cambios de la version principal.
const Discord = require('discord.js');
module.exports.run = async(client, message, args) => {
        const changeMessage = new Discord.RichEmbed()
            .setColor('#ff87d9')
            .setAuthor('Changelog', client.user.displayAvatarURL, '')
            .setThumbnail(client.user.displayAvatarURL)
            .addField('Cambios en la version 0.9.0 | Codename: ZEKE', 
                `+Nuevos comandos: \`osu\`, \`lyrics\`. 
                \n+Nuevas waifus añadidas.
                \n+Cambios menores y correción de texto.`)
            .addField('Para listas anteriores, visita:', '[Neon Bots](http://chaosneon.weebly.com)')
            .setFooter('ChaosNeon | 2019 - 2020');
        message.channel.send(changeMessage);
    }

module.exports.config = {
    name: 'changelog',
    description: 'Muestra la lista de cambios de la version actual',
    category: 'misc',
    cooldown: 5
}