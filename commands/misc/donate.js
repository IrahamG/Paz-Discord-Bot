const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

    let donateMessage = new Discord.RichEmbed()
        .setColor('#ff87d9')
        .setAuthor('¡Apoya al creador!', client.user.displayAvatarURL, '')
        .setThumbnail(client.user.displayAvatarURL)
        .setDescription('Muestra un apoyo al creador de Paz. Si te gusta lo que hace y quieres motivarlo a que siga haciendo más cosas, por favor considera hacer una donación o compartir con más gente.')
        .addField('Donaciones', `[Ko-Fi](https://ko-fi.com/irahamgardea)`)
        .addField('Blog', `[Neon Bots](https://chaosneon.weebly.com)`)
        .addField('Top donadores :heart:', 'Ninguno aún');

    message.channel.send(donateMessage);

}

module.exports.config = {
    name: 'donate',
    description: 'Información acerca de las donaciones y donadores.',
    category: 'misc'
}