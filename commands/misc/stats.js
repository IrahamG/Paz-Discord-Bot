const Discord = require('discord.js')

module.exports.run = async(client, message, args) => {

    const statMessage = new Discord.RichEmbed()
        .setColor('#ff87d9')
        .setAuthor('Estadisticas de Paz', client.user.displayAvatarURL, '')
        .setThumbnail(client.user.displayAvatarURL)
        .addField('Total de servidores', `${client.guilds.size}`)
        .addField('Total de usuarios', `${client.users.size}`)
        .setFooter('ChaosNeon | 2019 - 2020');
    messagce.channel.send(statMessage);

}

module.exports.config = {
    name: 'stats',
    description: 'Muestra las estadisticas de Paz',
    category: 'misc'
}