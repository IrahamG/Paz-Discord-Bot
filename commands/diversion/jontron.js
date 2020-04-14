const { giphyToken } = require('../../config.json')
const giphy = require('giphy-api')(giphyToken);
const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

    //Diferentes frases y generador de numero aleatorio
    let mensajes = ['Mood:', 'Yo en este momento:', 'Me:'];
    let rng = Math.floor(Math.random() * 3);

    giphy.search({
        "q": "jontron",  //Parametro de busqueda
        "limit" : 25    //Limite de resultados
     }, function (err, res) {
         //Obtener un gif de todos los resultados al azar
        let totalR = res.data.length;
        let respIndex = Math.floor((Math.random() * 10) + 1) % totalR;
        let respFinal = res.data[respIndex];

        let gifMessage = new Discord.RichEmbed()
            .setColor('#ff87d9')
            .setTitle(`${mensajes[rng]}`)
            .setImage(respFinal.images.fixed_height.url)
            .setFooter('Cortesia de Giphy');

        message.channel.send(gifMessage)
    });

}

module.exports.config = {
    name: 'jontron',
    description: 'Envía un gif aleatorio de Jontron',
    category: 'diversion'
}