const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

    //ES RECOMENDABLE QUE LAS IMAGENES TENGAN UNA RESOLUCION PEQUEÑA

        const ImageData = require('../../image_data.js');

        const totalNumber = 15 
        const randomNumber = Math.floor(Math.random() * ((totalNumber + 0) - 1)) + 1;  //RNG
        
        if(!args[0]){
            try{    
                let waifuMessage = new Discord.RichEmbed()
                    .setColor('#ff87d9')
                    .attachFiles([`./vgw/${randomNumber}.jpg`])
                    .setAuthor(`${ImageData.waifus[randomNumber].name}`, `attachment://${randomNumber}.jpg`, '')
                    .setDescription(`${ImageData.waifus[randomNumber].game}`)
                    .setImage(`attachment://${randomNumber}.jpg`)
                    .setFooter(`Waifu ${randomNumber}/${totalNumber}`);

                let msg = await message.channel.send(waifuMessage);

                await msg.react('❤️');
                await msg.react('💔');

            } catch (error) {
                message.channel.send('Algo sucedió con nuestras waifus, lo siento');
                console.log(error);
            }
        } else {
            try {
                let waifuMessage = new Discord.RichEmbed()
                    .setColor('#ff87d9')
                    .attachFiles([`./vgw/${args[0]}.jpg`])
                    .setAuthor(`${ImageData.waifus[args[0]].name}`, `attachment://${args[0]}.jpg`, '')
                    .setDescription(`${ImageData.waifus[args[0]].game}`)
                    .setImage(`attachment://${args[0]}.jpg`)
                    .setFooter(`Waifu ${args[0]}/${totalNumber}`);

                let msg = await message.channel.send(waifuMessage);

                await msg.react('❤️');
                await msg.react('💔');
            } catch (error) {
                message.channel.send('¿Seguro que escribiste un numero?');
                console.log(error);
            }
        }      
    }

module.exports.config = {
    name: 'waifu',
    description: 'Muestra una waifu de videojuegos al azar. Creditos a los respectivos artistas',
    category: 'diversion',
    usage: 'Numero de una waifu especifica',
    cooldown: 8
}