/*This command removes the ban status from a member in the server*/ 
const Discord = require('discord.js');
const client = new Discord.Client();
module.exports.run = async(client, message, args) => {
        //Si el usuario no tiene permisos no puede ejecutar el comando
        if (!message.member.hasPermission(['BAN_MEMBERS', 'ADMINISTRATOR'])) return message.reply('No tienes los permisos para hacer eso amiguito');
        let bannedMember = args[0];  //Guarda el ID en una variable
        message.guild.unban(bannedMember).then((bannedMember) => {   //Desbanea el ID guardado
            const unbanMessage = new Discord.RichEmbed()   //Embed message constructor
                .setColor('#ff87d9')
                .setTitle('**DESBANEO**')
                .setAuthor('Paz', client.user.displayAvatarURL, '')
                .addField('FELICIDADES', `El usuario ${bannedMember} ha sido desbaneado, por favor ahora portate bien, corazón`)
                .setTimestamp();
            message.channel.send(unbanMessage);
        }).catch(error => {
            message.reply('No pude desbanear al miembro, lo siento. Pusiste el ID correctamente?');
            console.error(error);
        })   
        
    }

module.exports.config = {
    name: 'unban',
    description: 'Elimina el ban de un miembro',
    category: 'moderacion',
    guildOnly: true,
    args: true,
    usage: '<ID de usuario>',
    access: 'Moderadores'
}