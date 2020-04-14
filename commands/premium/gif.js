const { giphyToken } = require('../../config.json')
const giphy = require('giphy-api')(giphyToken);
const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

    if(message.member.id != 270666964769177610) return message.channel.send('Este comando es exclusivo para donadores.');

    if(!args[0]) return message.channel.send('No has especificado la busqueda');

    let searchQ = args.join(' ');

    giphy.search({
        "q": searchQ,
        "limit" : 25
     }, function (err, res) {
        let totalR = res.data.length;
        let respIndex = Math.floor((Math.random() * 10) + 1) % totalR;
        let respFinal = res.data[respIndex];

        let gifMessage = new Discord.RichEmbed()
            .setColor('#ff87d9')
            .setTitle(`¿Encontré lo que buscabas?`)
            .setImage(respFinal.images.fixed_height.url)
            .setFooter('Cortesia de Giphy');

        message.channel.send(gifMessage)
    });

}

module.exports.config = {
    name: 'gif',
    description: 'Busca un gif con tus argumentos',
    category: 'premium',
    usage: '<Parametro de busqueda>',
    access: 'Donadores'
}