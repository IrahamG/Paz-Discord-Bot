//Lanza un dado y devuelve el resultado al canal
const Discord = require('discord.js');
module.exports.run = async(client, message, args) => {

        //Termina el proceso si el numero no es un dado valido y regresa el mensaje apropiado
        if(args[0] != '4' && args[0] != '6' && args[0] != '8' && args[0] != '10' && args[0] != '12' && args[0] != '20') {
            message.reply('Ese no es un numero valido de dado, consulta paz!help');
        }

        //Regresa un mensaje por cada opcion de dado
        switch (args[0]) {
            case '4':
                var diceResult = Math.floor(Math.random() * (5 - 1)) + 1;
                message.channel.send(`El resultado del tiro es: ${diceResult} :game_die:`);
                break;
            case '6':
                var diceResult = Math.floor(Math.random() * (7 - 1)) + 1;
                message.channel.send(`El resultado del tiro es: ${diceResult} :game_die:`);
                break;
            case '8':
                var diceResult = Math.floor(Math.random() * (9 - 1)) + 1;
                message.channel.send(`El resultado del tiro es: ${diceResult} :game_die:`);
                break;
            case '10':
                var diceResult = Math.floor(Math.random() * (11 - 1)) + 1;
                message.channel.send(`El resultado del tiro es: ${diceResult} :game_die:`);
                break;
            case '12':
                var diceResult = Math.floor(Math.random() * (13 - 1)) + 1;
                message.channel.send(`El resultado del tiro es: ${diceResult} :game_die:`);
                break;
            case '20':
                var diceResult = Math.floor(Math.random() * (21 - 1)) + 1;
                if(diceResult == 20) {
                    message.channel.send('¡20! **¡Golpe critico!** :game_die:');
                } else {
                    message.channel.send(`El resultado del tiro es: ${diceResult} :game_die:`);
                }
                break;
            default:
                break;
        }
    }

module.exports.config = {
    name: 'dice',
    description: 'Lanza un dado de tu eleccion y obtén el resultado',
    category: 'diversion',
    args: true,
    usage: '<Numero de caras (4/6/8/10/12/20)>',
    cooldown: 5
}