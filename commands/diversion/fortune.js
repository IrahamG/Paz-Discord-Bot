const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

    //Envia la advertencia en caso de no haber proporcionado una pregunta
    if(!args[0]) return message.channel.send('No has proporcionado una pregunta');

    //Posibles respuestas
    let fortuna = ['Sí', 'Efectivamente', 'Muy probablemente', 'Sin duda alguna', 'Tenlo por seguro', 'Probablemente',
    'No lo creo', 'No es probable', 'Ni lo pienses', 'De ninguna manera', 'No, no y NO', 'YES YES YES!'];

    //Generador de numero aleatorio
    let randomNumber = Math.floor(Math.random()* ((12 + 1) - 1)) + 1;
    let pregunta = args.join(' ');

    

    //Envia el mensaje de fortuna con el mensaje aleatorio
    try {
        let fortuneMessage = new Discord.RichEmbed()
            .setColor('#ff87d9')
            .setTitle(pregunta)
            .setDescription(fortuna[randomNumber]);
        message.channel.send(fortuneMessage);
    } catch (error) {

    console.log(error)
    message.channel.send('Algo sucedio al predecir la fortuna')

    }

    message.delete();

}

module.exports.config = {
    name: 'fortune',
    description: 'Predice la fortuna con una pregunta de si y no',
    category: 'diversion',
    usage: '<Pregunta>'
}

