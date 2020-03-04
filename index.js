const Discord = require('discord.js');
const { prefix, token, dblToken } = require('./config.json');
const client = new Discord.Client();
const DBL = require('dblapi.js');
const dbl = new DBL(dblToken, client);

['commands', 'aliases'].forEach(x => client[x] = new Discord.Collection());
['console', 'commands', 'event'].forEach(x => require(`./handlers/${x}`)(client));

dbl.on('posted', () => {
    console.log('Server count posted');
})

client.once('ready', () => {
    console.log('Ready!');

    let statuses = [
        `En ${client.guilds.size}/25 servidores!`,
        `Usa paz!help para ver los comandos`,
        `${client.users.size} usuarios!`,
        `Versión 0.8.2 REX | paz!changelog`
    ]

    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        client.user.setActivity(status, { type: 'playing' });
    }, 60000);

    
});


client.login(token);