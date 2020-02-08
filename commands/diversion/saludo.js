/*The command sends a greeting to everyone if its used without arguments. If a user is tagged with the command
it sends a personal greeting to the user*/
const Discord = require('discord.js');
module.exports.run = async(client, message, args) => {
        //If there's no one tagged
        if(!message.mentions.users.size) {
            return message.channel.send('Hola hemoshos! :heart:');
        }
        //Saves the first tagged member in the message and then sends the personal greeting
        message.delete();
        let taggedMemeber = message.mentions.members.first();
        message.channel.send(`Hola ${taggedMemeber.user}, hoy luces radiante! :heart:`);
      
    }


module.exports.config = {
    name: 'saludo',
    description: 'saludo para el usuario etiquetado',
    category: 'diversion',
    usage: '<Usuario>'
}