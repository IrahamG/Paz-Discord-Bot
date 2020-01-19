const Discord = require('discord.js');
module.exports = {
    name: 'poll',
    description: 'Crea una encuesta rapida',
    guildOnly: true,
    usage: '<Nombre de la encuesta> <Opciones 1-4>',
    cooldown: 5,
    execute(message, args) {
        if (!args[0]) return message.reply('no has proporcionado el nombre de la encuesta');

        async function pollCreator() {
            const pollDescription = args.join(' ');
            const pollMessage = new Discord.RichEmbed()
                .setColor('#ff87d9')
                .setFooter('Reaccionen para votar linduras')
                .setDescription(`📋 ${pollDescription}`)
                .setTitle(`**Encuesta creada por ${message.author.username}**`);

            let msg = await message.channel.send(pollMessage);

            await msg.react('✅');
            await msg.react('❌');

            message.delete();
        }

        pollCreator();
    }
}