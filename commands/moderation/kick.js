/*Moderation command. Kicks the tagged user and provides a motive for the kick*/
const Discord = require('discord.js');
module.exports.run = async(client, message, args) => {
        const user = message.mentions.users.first(); //Saves the tagged username

        if(message.member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS'])){  //Only admin users can use the command
            if (user) {
                const member = message.guild.member(user); //Verifies if the user is on the server
                if (member) {
                    member.kick().then((member) => {  //Kicks the user
                        const motivo = args.join(' ').slice(22);
                        const kickMessage = new Discord.RichEmbed()  //Creates an Embed Object 
                            //Customization options
                            .setColor('#ff87d9')
                            .setTitle('**REPORTE DE EXPULSION**')
                            .setAuthor('Paz', 'https://cdnb.artstation.com/p/assets/images/images/000/194/923/large/fahad-khan-metal-gear-artwork-19597.jpg?1409984106', '')
                            .addField('Usuario', `${user}`, true)
                            .addField('Moderador', `${message.author}`, true)
                            .addField('Motivo', `${motivo}`, true)
                            .setTimestamp();
                        //message.channel.send(`:wave: ${user.tag} ha sido expulsado. Motivo: ${args[1]}`);
                        //Sends the object kickMessage previously created
                        message.channel.send(kickMessage);
                    }).catch(error => {
                        message.reply('No pude explusar al miembro, sorry'); 
                        console.error(error);
                    })
                }
            }
        } else {
            //If the user hasn't the required permissions
            message.reply('No tienes los permisos para hacer eso amiguito');
        }    
    },


module.exports.config = {
    name: 'kick',
    description: 'Expulsa al miembro seleccionado',
    guildOnly: true,
    args: true,
    usage: '<Nombre de usuario> <Motivo de la expulsion>',
    cooldown: 5
}