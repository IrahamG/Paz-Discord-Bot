//Crea una advertencia para el usuario seleccionado
const Discord = require('discord.js');
module.exports.run = async(client, message, args) => {
        const user = message.mentions.users.first();  //Guarda el usuario etiquetado en una constante

        //Sale del proceso si el usuario no tiene los permisos requeridos
        if(!message.member.hasPermission(['BAN_MEMBERS', 'KICK_MEMBERS'])) return message.reply('No tienes los permisos para hacer eso amiguito');

        if(!args[0]) return message.reply('No has proporcionado un usuario')

        if(user) {
            const member = message.guild.member(user);  //Guarda el miembro y lo convierte a usuario
            if(member) {
                let motivo = args.join(" ").slice(22);   //Guarda el motivo dentro de una constante

                if(!motivo) {
                    motivo = 'Sin motivo aparente'
                }
                //Crea el embed de advertencia 
                const warnMessage = new Discord.RichEmbed() 
                    .setColor('#ff87d9')
                    .setTitle('**ADVERTENCIA**')
                    .setAuthor('Paz', client.user.displayAvatarURL, '')
                    .addField('Usuario', `${user}`, true)
                    .addField('Motivo', `${motivo}`, true)
                    .setTimestamp();
                try{
                    message.channel.send(warnMessage);
                } catch (error) {
                    message.reply('No pude advertir al miembro, sorry');
                    console.error(error);
                }
                
            }
        }
    }

module.exports.config = {
    name: 'warn',
    description: 'Advierte a un usuario',
    category: 'moderacion',
    guildOnly: true,
    args: true,
    usage: '<Nombre de usuario> <Motivo de advertencia>',
    access: 'Moderadores'
}