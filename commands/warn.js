const Discord = require('discord.js');
module.exports = {
    name: 'warn',
    description: 'Advierte a un usuario',
    guildOnly: true,
    args: true,
    usage: '<Nombre de usuario> <Motivo de advertencia>',
    cooldown: 5,
    execute(message, args) {
        const user = message.mentions.users.first();  //Guarda el usuario etiquetado en una constante

        //Sale del proceso si el usuario no tiene los permisos requeridos
        if(!message.member.hasPermission(['BAN_MEMBERS', 'KICK_MEMBERS'])) return message.reply('No tienes los permisos para hacer eso amiguito');

        if(user) {
            const member = message.guild.member(user);  //Guarda el miembro y lo convierte a usuario
            if(member) {
                const motivo = args.join(" ").slice(22);   //Guarda el motivo dentro de una constante
                //Crea el embed de advertencia 
                const warnMessage = new Discord.RichEmbed() 
                    .setColor('#ff87d9')
                    .setTitle('**ADVERTENCIA**')
                    .setAuthor('Paz', 'https://cdnb.artstation.com/p/assets/images/images/000/194/923/large/fahad-khan-metal-gear-artwork-19597.jpg?1409984106', '')
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
}