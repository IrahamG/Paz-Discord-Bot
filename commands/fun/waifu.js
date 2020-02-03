const Discord = require('discord.js');

module.exports.run = async(client, message, args) =>{
            //Importa los datos de las imagenes
            const ImageData = require('../../image_data.js');

            //Diccionarios de los nombres y los titulos
            const namesDic = {1:String(ImageData.name1), 2:String(ImageData.name2), 3:String(ImageData.name3), 4:String(ImageData.name4),
            5:String(ImageData.name5), 6:String(ImageData.name6)};

            const gamesDic = {1:String(ImageData.game1), 2:String(ImageData.game2), 3:String(ImageData.game3), 4:String(ImageData.game4),
            5:String(ImageData.game5), 6:String(ImageData.game6)};

            const totalNumber = 6 //Numero total de waifus
            const randomNumber = Math.floor(Math.random() * ((totalNumber + 1) - 1)) + 1;  //RNG
        
            //Genera el embed de la waifu basada en el numero generado
        try{    
            const waifuMessage = new Discord.RichEmbed()
                .setColor('#ff87d9')
                .attachFiles([`./vgw/${randomNumber}.jpg`])
                .setAuthor(`${namesDic[randomNumber]}`, `attachment://${randomNumber}.jpg`, '')
                .setDescription(`${gamesDic[randomNumber]}`)
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
    description: 'Muestra una waifu de videojuegos al azar',
    guildOnly: true,
    cooldown: 8
}