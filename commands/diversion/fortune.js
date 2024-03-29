const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

    //Envia la advertencia en caso de no haber proporcionado una pregunta
    if(!args[0]) return message.channel.send('No escribiste tu pregunta');

    //Posibles respuestas
    let fortuna = ['Yep', 'Efectivamente', 'Muy probablemente', 'Sin duda alguna', 'Tenlo por seguro', 'Probablemente',
    'No lo creo', 'No es probable', 'Nah', 'De ninguna manera', 'No, no y NO', 'YES YES YES!', 'pa k kieres saber eso jaja salu2',
    'No creo que quieras saber', 'La respuesta ya la sabes', '¿En serio me preguntaste eso?', 'Ooooh si', 'Por supuesto', 'Afirmativo'];

    //Generador de numero aleatorio
    let randomNumber = Math.floor(Math.random()* ((18 + 1) - 1)) + 1;
    let pregunta = args.join(' ');

    await message.delete();

    //Envia el mensaje de fortuna con el mensaje aleatorio
    try {
        let fortuneMessage = new Discord.RichEmbed()
            .setColor('#ff87d9')
            .setTitle(pregunta)
            .setDescription(fortuna[randomNumber]);
        message.channel.send(fortuneMessage);
    } catch (error) {

    console.log(error)
    message.channel.send('Algo sucedió al predecir la fortuna')

    }


}

module.exports.config = {
    name: 'fortune',
    description: 'Paz contesta tus interrogantes',
    category: 'diversion',
    usage: '<Pregunta>'
}

