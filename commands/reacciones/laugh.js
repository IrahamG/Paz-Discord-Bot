const { giphyToken } = require('../../config.json')
const giphy = require('giphy-api')(giphyToken);
const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

    let mensajes = ['ríe', 'no soporta la risa', 'se suelta a reir', 'se muere de la risa', 'se carcajea'];
    let rng = Math.floor(Math.random() * 5);

    giphy.search({
        "q": "laugh, anime",
        "limit" : 25
     }, function (err, res) {
        let totalR = res.data.length;
        let respIndex = Math.floor((Math.random() * 10) + 1) % totalR;
        let respFinal = res.data[respIndex];

        let gifMessage = new Discord.RichEmbed()
            .setColor('#ff87d9')
            .setTitle(`¡${message.author.username} ${mensajes[rng]}!`)
            .setImage(respFinal.images.fixed_height.url)
            .setFooter('Cortesia de Giphy');

        message.channel.send(gifMessage)
    });

}

module.exports.config = {
    name: 'laugh',
    description: 'Envía un gif aleatorio con reacción de risa.',
    category: 'reacciones'
}