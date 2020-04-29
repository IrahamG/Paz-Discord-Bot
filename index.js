const Discord = require('discord.js');
const { token, dblToken } = require('./config.json');
const client = new Discord.Client();
const DBL = require('dblapi.js');
const dbl = new DBL(dblToken, client);


['commands', 'aliases'].forEach(x => client[x] = new Discord.Collection());
['console', 'commands', 'event'].forEach(x => require(`./handlers/${x}`)(client));

dbl.on('posted', () => {
    console.log('Server count posted');
})

client.once('ready', async () => {
    console.log('Ready!');

    let statuses = [
        `En ${client.guilds.size} servidores!`,
        `Usa paz!help para ver los comandos`,
        `${client.users.size} usuarios!`,
        `Versión 1.0.2 ZEKE | paz!changelog`,
        `Visita nuestro sitio web | paz!info`
    ]

    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        client.user.setActivity(status, { type: 'playing' });
    }, 60000);

    
});

client.login(token);
