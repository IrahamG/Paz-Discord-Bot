/*The command sends a greeting to everyone if its used without arguments. If a user is tagged with the command
it sends a personal greeting to the user*/
const Discord = require('discord.js');
module.exports.run = async(client, message, args) => {
        //If there's no one tagged
        if(!message.mentions.users.size) {
            const saludoGeneral = new Discord.RichEmbed()
                .setColor('#ff87d9')
                .addField('**Paz saluda**', 'Hola hemoshos! :heart:');
            return message.channel.send(saludoGeneral);
        }
        //Saves the first tagged member in the message and then sends the personal greeting
        let taggedMemeber = message.mentions.members.first();
        const saludoIndiv = new Discord.RichEmbed()
            .setColor('#ff87d9')
            .addField(`**Paz saluda a ${taggedMemeber.displayName}**`, 'Hello beautiful! :heart:');
        message.channel.send(saludoIndiv);
        //message.channel.send('Hola ' + taggedMemeber.displayName + '! :heart:');
    }


module.exports.config = {
    name: 'saludo',
    description: 'saludo para el usuario etiquetado',
    category: 'diversion',
    usage: '<Usuario>'
}