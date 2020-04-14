//Regresa un mensaje con los cambios de la version principal.
const Discord = require('discord.js');
module.exports.run = async(client, message, args) => {
        const changeMessage = new Discord.RichEmbed()
            .setColor('#ff87d9')
            .setAuthor('Changelog', client.user.displayAvatarURL, '')
            .setThumbnail(client.user.displayAvatarURL)
            .addField('Cambios en la versión 1.0.1 | Codename: ZEKE', 
                `+Nuevos comandos: \`jontron\`, \`happy\`, \`sad\`, \`angry\`, \`laugh\`.\n
                +Nuevo comando premium: \`gif\`.\n
                +Nuevas waifus añadidas al comando waifu.\n
                +Cambios en los textos de algunos comandos. Correciones ortográficas.\n
                +Nuevas categorias: Reacciones y Comandos premium.`)
            .addField('Para listas anteriores, visita:', '[Neon Bots](http://chaosneon.weebly.com)')
            .setFooter('ChaosNeon | 2019 - 2020');
        message.channel.send(changeMessage);
    }

module.exports.config = {
    name: 'changelog',
    description: 'Muestra la lista de cambios de la versión actual',
    category: 'misc',
    cooldown: 5
}