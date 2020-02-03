//Genera una encuesta dentro del servidor
const Discord = require('discord.js');
module.exports.run = async(client, message, args) => {
        //Sale del proceso si no hubo argumentos
        if (!args[0]) return message.reply('no has proporcionado el nombre de la encuesta');

        //Crea una funcion que crea una encuesta
        async function pollCreator() {
            //Une todos los argumentos 
            const pollDescription = args.join(' ');
            const pollMessage = new Discord.RichEmbed()
                .setColor('#ff87d9')
                .setFooter('Reaccionen para votar linduras')
                .setDescription(`📋 ${pollDescription}`)
                .setTitle(`**Encuesta creada por ${message.author.username}**`);

            //Envia el mensaje despues de ser creado
            let msg = await message.channel.send(pollMessage);

            //El bot reacciona con los siguientes emojis
            await msg.react('✅');
            await msg.react('❌');

            message.delete();
        }

        //Ejecuta la funcion
        pollCreator();
    }

module.exports.config = {
    name: 'poll',
    description: 'Crea una encuesta rapida',
    guildOnly: true,
    usage: '<Nombre de la encuesta>',
    cooldown: 5
}