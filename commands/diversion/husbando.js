const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

    //ES RECOMENDABLE QUE LAS IMAGENES TENGAN UNA RESOLUCION PEQUEÑA

        const ImageData = require('../../image_data.js');

        const totalNumber = 5
        const randomNumber = Math.floor(Math.random() * ((totalNumber + 0) - 1)) + 1;  //RNG
        
        if(!args[0]){
            try{    
                let husbandoMessage = new Discord.RichEmbed()
                    .setColor('#ff87d9')
                    .attachFiles([`./vgh/${randomNumber}.jpg`])
                    .setAuthor(`${ImageData.husbandos[randomNumber].name}`, `attachment://${randomNumber}.jpg`, '')
                    .setDescription(`${ImageData.husbandos[randomNumber].game}`)
                    .setImage(`attachment://${randomNumber}.jpg`)
                    .setFooter(`Husbando ${randomNumber}/${totalNumber} | Creditos a los respectivos artistas.`);

                let msg = await message.channel.send(husbandoMessage);

                await msg.react('❤️');
                await msg.react('💔');

            } catch (error) {
                message.channel.send('Algo sucedió con nuestros husbandos, lo siento');
                console.log(error);
            }
        } else {
            try {
                let husbandoMessage = new Discord.RichEmbed()
                    .setColor('#ff87d9')
                    .attachFiles([`./vgh/${args[0]}.jpg`])
                    .setAuthor(`${ImageData.husbandos[args[0]].name}`, `attachment://${args[0]}.jpg`, '')
                    .setDescription(`${ImageData.husbandos[args[0]].game}`)
                    .setImage(`attachment://${args[0]}.jpg`)
                    .setFooter(`Husbando ${args[0]}/${totalNumber} | Creditos a los respectivos artistas.`);

                let msg = await message.channel.send(husbandoMessage);

                await msg.react('❤️');
                await msg.react('💔');
            } catch (error) {
                message.channel.send('¿Seguro que escribiste un número valido?');
                console.log(error);
            }
        }      
    }

module.exports.config = {
    name: 'husbando',
    description: 'Muestra un husbando de videojuegos al azar. Creditos a los respectivos artistas',
    category: 'diversion',
    usage: '<Número de un husbando especifico>',
    cooldown: 8
}