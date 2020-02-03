const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

    if(!message.member.hasPermission('MANAGE_ROLES')) return message.reply('No tienes los permisos para hacer eso amiguito');

    if(!message.guild.me.hasPermission(['MANAGE_ROLES', 'ADMINISTRATOR'])) return message.channel.send('¿Por que no tengo los permisos para hacer eso? :(');

    let mutee = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!mutee) return message.channel.send('Por favor introduzca un usuario');

    let motivo = args.slice(1).join(' ');
    if(!motivo) motivo = 'Sin motivo aparente';

    let muterole = message.guild.roles.find(r => r.name === 'Silenciado')
    if(!muterole) return message.channel.send('No hay un rol de *Silenciado* existente')

    mutee.removeRole(muterole.id).then(() => {
        message.delete()
        mutee.send(`Buenas!~ Has dejado de estar silenciado en: ${message.guild.name} por: ${motivo}. Ahora portate bien <3`).catch(error => console.log(error))
        message.channel.send(`${mutee.user.username} Puede volver a hablar!`)
    })

    let unmuteMessage = new Discord.RichEmbed()
        .setColor('#ff87d9')
        .setTitle('**REPORTE DE UNMUTE**')
        .setAuthor('Paz', client.user.displayAvatarURL, '')
        .addField('Usuario', `${mutee.user}`, true)
        .addField('Moderador', `${message.author}`, true)
        .addField('Motivo', `${motivo}`, true)
        .setTimestamp();

    message.channel.send(unmuteMessage);

}

module.exports.config = {
    name: 'unmute',
    description: 'Levanta el silencio a un usuario',
    category: 'moderacion',
    usage: '<Usuario a dejar de silenciar>',
    access: 'Moderadores'
}