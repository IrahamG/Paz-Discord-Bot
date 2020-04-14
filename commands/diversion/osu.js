const Discord = require('discord.js');
const osu = require('node-osu');

//Constructor del objeto de osuApi
const osuApi = new osu.Api('309b672b1b06678bcc5155eae909e49f38e754f8' , {
    notFoundAsError: false,
    completeScores: false,
    parseNumeric: true
});

module.exports.run = async(client, message, args) => {

    if(!args[0]) return message.channel.send('No has proporcionado un usuario');
    if(!args[1]) return message.channel.send('No has proporcionado modo de juego');

    let usu = args[0];
    let modeS = args[1].toLowerCase();
    let mode = 0;
    let modeT = '';

    //Cambia las variables de mode y modeT dependiendo de lo que el usuario haya puesto como parametro
    switch(modeS) {
        case 'std':
            mode = 0;
            modeT = 'osu! Standard';
            break;
        case 'taiko':
            mode = 1;
            modeT = 'osu! Taiko';
            break;
        case 'ctb':
            mode = 2;
            modeT = 'osu! Catch the Beat';
            break;
        case 'mania':
            mode = 3;
            modeT = 'osu! Mania';
            break;
        default:
            return message.channel.send('No se encontró ese modo de juego, si tienes dudas usa paz!help');
    }

    osuApi.getUser({ u: usu, m: mode }).then(user => {

        try {
            let countryLower = (`${user.country}`).toLowerCase();
            let countryFlag = `flag_${countryLower}`;
            let hoursPlayed = parseInt((user.secondsPlayed) / 3600);

            let usuMessage = new Discord.RichEmbed()
                .setColor('#ff87d9')
                .setTitle(`Estadisticas para: ${user.name} en ${modeT}`)
                .setThumbnail(`http://s.ppy.sh/a/${user.id}`)
                .addField('#ID', `${user.id}`, true) 
                .addField('País de origen', `${user.country} :${countryFlag}:`, true)
                .addField(`PP`, `${user.pp.raw}`, true)
                .addField(`Rank Nacional`, `${user.pp.countryRank}`, true)
                .addField(`Rank Global`, `${user.pp.rank}`, true)
                .addField(`Presición`, `${(user.accuracy).toFixed(2)}%`, true)
                .addField(`Nivel`, `${parseInt(user.level)}`, true)
                .addField(`# de Partidas`, `${user.counts.plays}`, true)
                .addField(`Tiempo jugado`, `${hoursPlayed} horas`, true)
                .addField(`***SSH***`, `${user.counts.SSH}`, true)
                .addField(`***SS***`, `${user.counts.SS}`, true)
                .addField(`**SH**`, `${user.counts.SH}`, true)
                .addField(`**S**`, `${user.counts.S}`, true)
                .addField(`*A*`, `${user.counts.A}`, true)
                .addField(`Corazón`, `:heart:`, true)
                .setFooter(`Luce bien! Gran trabajo, sigue asi! :heart:`);

            message.channel.send(usuMessage);
        } catch(error) {
            message.channel.send('El usuario no fue encontrado')
            console.log(error);
        }
    });
}

module.exports.config = {
    name: 'osu',
    description: 'Retorna las estadisticas de un usuario de osu!',
    usage: '<Nombre de usuario> <std, taiko, ctb, mania>',
    category: 'diversion'
}