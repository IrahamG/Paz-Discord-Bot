const { giphyToken } = require('../../config.json')
const giphy = require('giphy-api')(giphyToken);
const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

    let mensajes = ['está enojad@', 'está furios@', 'quiere golpear a alguien', 'no contiene la ira', 'no contiene la rabia'];
    let rng = Math.floor(Math.random() * 5);

    giphy.search({
        "q": "angry, anime",
        "limit" : 25
     }, function (err, res) {
        let totalR = res.data.length;
        let respIndex = Math.floor((Math.random() * 10) + 1) % totalR;
        let respFinal = res.data[respIndex];

        let gifMessage = new Discord.RichEmbed()
            .setColor('#ff87d9')
            .setTitle(`${message.author.username} ${mensajes[rng]}`)
            .setImage(respFinal.images.fixed_height.url)
            .setFooter('Cortesia de Giphy');

        message.channel.send(gifMessage)
    });

}

module.exports.config = {
    name: 'angry',
    description: 'Envía un gif aleatorio con reacción de ira',
    category: 'reacciones'
}