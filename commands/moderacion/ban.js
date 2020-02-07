/*The command bans the tagged user from the server*/ 
const Discord = require('discord.js');
module.exports.run = async(client, message, args) => {

    if (!args[0]) return message.reply('No has proporcionado un usuario');

        const user = message.mentions.users.first();
        //Works only if the member has permission to use ban commands
        if(message.member.hasPermission(['BAN_MEMBERS'])) {
            if (user) {
                const member = message.guild.member(user);   //Saves the user in a constant named member 
                if (member) {
                    member.ban().then((member) => {
                        let motivo = args.join(' ').slice(22);
                        if(!motivo) motivo = 'Sin motivo aparente';
                        const banMessage = new Discord.RichEmbed()   //Embed constructor
                            .setColor('#ff87d9')
                            .setTitle('**REPORTE DE BAN**')
                            .setAuthor('Paz', client.user.displayAvatarURL, '')
                            .addField('Usuario', `${user}`, true)
                            .addField('Moderador', `${message.author}`, true)
                            .addField('Motivo', `${motivo}`, true)
                            .setTimestamp();
                        message.channel.send(banMessage);
                    }).catch(error => {
                        message.reply('No pude banear al miembro, sorry');
                        console.error(error);
                    })
                }
            }
        } else {
            message.reply('No tienes los permisos para hacer eso amiguito');
        }
    }

module.exports.config = {
    name: 'ban',
    description: 'Banea al miembro seleccionado',
    category: 'moderacion',
    guildOnly: true,
    args: true,
    usage: '<Nombre de usuario> <Motivo del ban>',
    access: 'Moderadores'
}