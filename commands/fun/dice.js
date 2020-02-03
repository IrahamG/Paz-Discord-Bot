const Discord = require('discord.js');
module.exports.run = async(client, message, args) => {
        if(args[0] != '4' && args[0] != '6' && args[0] != '8' && args[0] != '10' && args[0] != '12' && args[0] != '20') {
            message.reply('Ese no es un numero valido de dado, consulta paz!help');
        }

        /*TODO: Mensaje embed con algun efecto y posiblemente imagenes de cada dado. 
        Advertencia de golpe critico al tirar 20.
        */
        switch (args[0]) {
            case '4':
                var diceResult = Math.floor(Math.random() * (5 - 1)) + 1;
                message.channel.send(`El resultado del tiro es: ${diceResult}`);
                break;
            case '6':
                var diceResult = Math.floor(Math.random() * (7 - 1)) + 1;
                message.channel.send(`El resultado del tiro es: ${diceResult}`);
                break;
            case '8':
                var diceResult = Math.floor(Math.random() * (9 - 1)) + 1;
                message.channel.send(`El resultado del tiro es: ${diceResult}`);
                break;
            case '10':
                var diceResult = Math.floor(Math.random() * (11 - 1)) + 1;
                message.channel.send(`El resultado del tiro es: ${diceResult}`);
                break;
            case '12':
                var diceResult = Math.floor(Math.random() * (13 - 1)) + 1;
                message.channel.send(`El resultado del tiro es: ${diceResult}`);
                break;
            case '20':
                var diceResult = Math.floor(Math.random() * (21 - 1)) + 1;
                message.channel.send(`El resultado del tiro es: ${diceResult}`);
                break;
            default:
                break;
        }
    }

module.exports.config = {
    name: 'dice',
    description: 'Lanza un dado de tu eleccion y obtén el resultado',
    args: true,
    usage: '<Numero de caras (4/6/8/10/12/20)>',
    cooldown: 5
}