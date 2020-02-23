const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

    //Opciones para el juego
    let options = ['piedra', 'papel', 'tijeras'];
    //Numero generado al azar
    let randomNumber = Math.floor((Math.random() * options.length));

    if(!args[0]) return message.channel.send('¿Vas a jugar con el aire? Usa paz!help rps');

    let answer = args[0].toLowerCase();
    let botAnswer = options[randomNumber];

    //Regresa si la opcion no exsite
    if(answer != 'piedra' && answer != 'papel' && answer != 'tijeras') return message.channel.send('Me temo que esa opcion no existe')

    message.delete();

    //Regresa el mensaje correspondiente dependiendo de cada resultado
    try {
        if(answer == botAnswer) {
            message.channel.send('Empate!');
        } else if (answer == 'piedra') {
            if (botAnswer == 'papel') return message.channel.send('Papel. Victoria para mi!');
            else return message.channel.send(`Tijeras. Victoria para ${message.author.username} :heart:!`);
        } else if (answer == 'papel') {
            if (botAnswer == 'tijeras') return message.channel.send('Tijeras. Victoria para mi!');
            else return message.channel.send(`Piedra. Victoria para ${message.author.username}! :heart:`);
        } else if (answer == 'tijeras') {
            if (botAnswer == 'piedra') return message.channel.send('Piedra. Victoria para mi!');
            else return message.channel.send(`Papel. Victoria para ${message.author.username}! :heart:`)
        }
    } catch(error) {
        console.log(error)
        message.channel.send('Algo sucedio con la partida, lo siento')
    }
}

module.exports.config = {
    name: 'rps',
    description: 'Juega piedra papel o tijera con Paz',
    usage: '<Piedra, papel o tijeras>',
    category: 'diversion'
}