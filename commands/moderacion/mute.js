const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

    if(!message.member.hasPermission('MANAGE_ROLES')) return message.reply('No tienes los permisos para hacer eso amiguito');

    if(!message.guild.me.hasPermission(['MANAGE_ROLES', 'ADMINISTRATOR'])) return message.channel.send('¿Por que no tengo los permisos para hacer eso? :(');

    let mutee = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!mutee) return message.channel.send('Por favor introduzca un usuario');

    let motivo = args.slice(1).join(' ');
    if(!motivo) motivo = 'No se ha especificado un motivo';

    let muterole = message.guild.roles.find(r => r.name === 'Silenciado')
    if(!muterole) {
        try {
            muterole = await message.guild.createRole({
                name: 'Silenciado',
                color: '#8a8a8a',
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false,
                    SEND_TTS_MESSAGES: false,
                    ATTACH_FILES: false,
                    SPEAK: false
                })
            })
        } catch (error) {
            console.log(error.stack)
            message.channel.send('Algo sucedio al crear el rol, lo siento');
        }
    }

    mutee.addRole(muterole.id).then(() => {
        message.delete()
        mutee.send(`Buenas!~ Has sido silenciado de ${message.guild.name} por: ${motivo}`)
        message.channel.send(`${mutee.user.username} ha sido silenciado con exito~`)
    })

    let muteMessage = new Discord.RichEmbed()
        .setColor('#ff87d9')
        .setTitle('**REPORTE DE MUTE**')
        .setAuthor('Paz', client.user.displayAvatarURL, '')
        .addField('Usuario', `${mutee.user}`, true)
        .addField('Moderador', `${message.author}`, true)
        .addField('Motivo', `${motivo}`, true)
        .setTimestamp();

    message.channel.send(muteMessage);
}

module.exports.config = {
    name: 'mute',
    description: 'Silencia a un usuario',
    category: 'moderacion',
    usage: '<Usuario a silenciar> <Motivo>',
    access: 'Moderadores'
}