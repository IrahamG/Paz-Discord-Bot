const Discord = require('discord.js');
const genius = require('genius-lyrics');

const Genius = new genius.Client('MQByUsEoDdsreq1OYUhiM_FOl7500_2rUVF5cbbIi7YmALEBARY5bVvnF_QUhDvt');

module.exports.run = async(client, message, args) => {

    if(!args[0]) return message.reply('no has proporcionado nombre de la canción');

    let nombreCancion = args.join(' ');

    const search = await Genius.findTrack(nombreCancion);
    const url = await Genius.getUrl(search);
    const lyricsJSON = await Genius.getLyrics(url);

    const all = await Genius.getAll(search)
    const lyrics = lyricsJSON.lyrics;
    

    const arr = lyrics.match(/[\s\S]{1,2048}/g);

    try {
        for(let chunk of arr) {
            let lyricMessage = new Discord.RichEmbed()
                .setTitle(`Letra para: ${all.title}`)
                .setColor('#ff87d9')
                .setDescription(chunk)
                .setFooter('Letra cortesía de Genius');

            await message.channel.send(lyricMessage)
        }

    }catch(error) {
        message.channel.send('No pude encontrar esa cancion')
        console.log(error);
    }

}

module.exports.config = {
    name: 'lyrics',
    description: 'Obtén la letra de una canción. Powered by Genius',
    usage: '<Nombre de la canción>',
    category: 'diversion'
}