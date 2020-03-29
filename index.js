const Discord = require('discord.js');
const { prefix, token, dblToken } = require('./config.json');
const { Users, CurrencyShop } = require('./dbObjects');
const client = new Discord.Client();
//const DBL = require('dblapi.js');
//const dbl = new DBL(dblToken, client);
const currency = new Discord.Collection();

['commands', 'aliases'].forEach(x => client[x] = new Discord.Collection());
['console', 'commands', 'event'].forEach(x => require(`./handlers/${x}`)(client));


client.once('ready', async () => {
    const storedBalances = await Users.findAll();
    storedBalances.forEach(b => currency.set(b.user_id, b));
    console.log('Ready!');

    let statuses = [
        `En ${client.guilds.size}/25 servidores!`,
        `Usa paz!help para ver los comandos`,
        `${client.users.size} usuarios!`,
        `Versión 0.9.0 ZEKE | paz!changelog`
    ]

    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        client.user.setActivity(status, { type: 'playing' });
    }, 60000);

    
});

client.login(token);

module.exports = { currency }