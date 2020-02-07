const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

['commands', 'aliases'].forEach(x => client[x] = new Discord.Collection());
['console', 'commands', 'event'].forEach(x => require(`./handlers/${x}`)(client));

client.once('ready', () => {
    console.log('Ready!');

    let statuses = [
        `En ${client.guilds.size}/10 servidores!`,
        `Usa paz!help para ver los comandos`,
        `${client.users.size} usuarios!`,
        `Versión 0.6.2 REX | paz!changelog`
    ]

    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        client.user.setActivity(status, { type: 'playing' });
    }, 60000);

    
});


client.login(token);