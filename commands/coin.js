//Lanza una moneda y arroja el resultado: Cara o cruz
const Discord = require('discord.js');
module.exports = {
    name: 'coin',
    description: 'Lanza una moneda',
    guildOnly: true,
    cooldown: 8,
    execute(message, args) {
        try{
            //Genera un numero aleatorio entre uno y dos
            const randomNumber = Math.floor(Math.random() * (3 - 1)) + 1;
            //Envia el mensaje correspondiente dependiendo del resultado
            switch(randomNumber) {
                case 1:
                    var coinMessage = new Discord.RichEmbed()
                        .setColor('#ff87d9')
                        .setTitle('**Coinflip**')
                        .setDescription('Cara!');
                    message.channel.send(coinMessage);
                    break;
                case 2:
                    var coinMessage = new Discord.RichEmbed()
                        .setColor('#ff87d9')
                        .setTitle('**Coinflip**')
                        .setDescription('Cruz!');
                    message.channel.send(coinMessage);
                    break;
                default:
                    break;
            }
        } catch (error) {
            message.channel.send('Algo sucedio al lanzar la moneda');
            console.log(error);
        }
    }
}