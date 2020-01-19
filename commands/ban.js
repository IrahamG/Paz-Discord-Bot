/*The command bans the tagged user from the server*/ 
const Discord = require('discord.js');
module.exports = {
    name: 'ban',
    desription: 'Banea al miembro seleccionado',
    guildOnly: true,
    args: true,
    usage: '<Nombre de usuario> <Motivo del ban>',
    cooldown: 5,
    execute(message, args) {
        const user = message.mentions.users.first();
        //Works only if the member has permission to use ban commands
        if(message.member.hasPermission(['BAN_MEMBERS'])) {
            if (user) {
                const member = message.guild.member(user);   //Saves the user in a constant named member 
                if (member) {
                    member.ban().then((member) => {
                        const motivo = args.join(' ').slice(22);
                        const banMessage = new Discord.RichEmbed()   //Embed constructor
                            .setColor('#ff87d9')
                            .setTitle('**REPORTE DE BAN**')
                            .setAuthor('Paz', 'https://cdnb.artstation.com/p/assets/images/images/000/194/923/large/fahad-khan-metal-gear-artwork-19597.jpg?1409984106', '')
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
}