/*This command returns information about the bot and its creator*/ 
const Discord = require('discord.js');
module.exports = {
    name: 'info',
    cooldown: 10,
    description: 'Informacion del bot y su creador',
    execute(message, args){
        const infoMessage = new Discord.RichEmbed()
            .setColor('#ff87d9')
            .setTitle('**Hola, Soy Paz!**')
            .addField('Acerca de mi:', 'Fui creada el 14/01/2020, actualmente me encuentro en la version 0.5, mi padre es ChaosNeon, visita su Twitter y Github para mas!');
        message.channel.send(infoMessage);
    },
};