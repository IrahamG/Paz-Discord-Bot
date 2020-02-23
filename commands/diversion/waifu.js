const Discord = require('discord.js');

module.exports.run = async(client, message, args) =>{

    //ES RECOMENDABLE QUE LAS IMAGENES TENGAN UNA RESOLUCION PEQUEÑA

        const ImageData = require('../../image_data.js');

        const totalNumber = 10 
        const randomNumber = Math.floor(Math.random() * ((totalNumber + 0) - 1)) + 1;  //RNG
        
        try{    
            const waifuMessage = new Discord.RichEmbed()
                .setColor('#ff87d9')
                .attachFiles([`./vgw/${randomNumber}.jpg`])
                .setAuthor(`${ImageData.waifus[randomNumber].name}`, `attachment://${randomNumber}.jpg`, '')
                .setDescription(`${ImageData.waifus[randomNumber].game}`)
                .setImage(`attachment://${randomNumber}.jpg`)
                .setFooter(`Waifu ${randomNumber}/${totalNumber}`);
            message.channel.send(waifuMessage);
        } catch (error) {
            message.channel.send('Algo sucedió con nuestras waifus, lo siento');
            console.log(error);
        }

        
    }

module.exports.config = {
    name: 'waifu',
    description: 'Muestra una waifu de videojuegos al azar. Creditos a los respectivos artistas',
    category: 'diversion',
    guildOnly: true,
    cooldown: 8
}