//Lanza un dado y devuelve el resultado al canal
const Discord = require('discord.js');
module.exports.run = async(client, message, args) => {

        if(!args[0]) return message.reply('No especificaste el número de caras');

        //Termina el proceso si el numero no es un dado valido y regresa el mensaje apropiado
        if(args[0] != '4' && args[0] != '6' && args[0] != '8' && args[0] != '10' && args[0] != '12' && args[0] != '20' && args[0] != '100') {
           return message.reply('Ese no es un número de dado valido, consulta paz!help');
        }

        let diceMessage = new Discord.RichEmbed()
            .setColor('#ff87d9')
            .setTitle(`Dado de ${args[0]} caras :game_die:`)

        //Regresa un mensaje por cada opcion de dado
        switch (args[0]) {
            case '4':
                var diceResult = Math.floor(Math.random() * (5 - 1)) + 1;
                diceMessage.setDescription(`El resultado del tiro es: ${diceResult}`);
                break;
            case '6':
                var diceResult = Math.floor(Math.random() * (7 - 1)) + 1;
                diceMessage.setDescription(`El resultado del tiro es: ${diceResult}`);
                break;
            case '8':
                var diceResult = Math.floor(Math.random() * (9 - 1)) + 1;
                diceMessage.setDescription(`El resultado del tiro es: ${diceResult}`);
                break;
            case '10':
                var diceResult = Math.floor(Math.random() * (11 - 1)) + 1;
                diceMessage.setDescription(`El resultado del tiro es: ${diceResult}`);
                break;
            case '12':
                var diceResult = Math.floor(Math.random() * (13 - 1)) + 1;
                diceMessage.setDescription(`El resultado del tiro es: ${diceResult}`);
                break;
            case '20':
                var diceResult = Math.floor(Math.random() * (21 - 1)) + 1;
                if(diceResult == 20) {
                    diceMessage.setDescription('¡20! **¡Golpe crítico!**');
                } else {
                    diceMessage.setDescription(`El resultado del tiro es: ${diceResult}`);
                }
                break;
            case '100':
                var diceResult = Math.floor(Math.random() * (101 - 1)) + 1;
                diceMessage.setDescription(`El resultado del tiro es: ${diceResult}`);
                break;
            default:
                break;
        }

        message.channel.send(diceMessage);
    }

module.exports.config = {
    name: 'dice',
    description: 'Lanza un dado de tu elección y obtén el resultado',
    category: 'diversion',
    args: true,
    usage: '<Número de caras (4/6/8/10/12/20)>',
    cooldown: 5
}