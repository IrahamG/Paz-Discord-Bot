const { Users, CurrencyShop } = require('../dbObjects');
const { readdirSync } = require('fs');

module.exports = (client) => {
    const load = dir => {
        const commands = readdirSync(`./commands/${dir}/`).filter(d => d.endsWith('js'));
        for(let file of commands) {
            const pull = require(`../commands/${dir}/${file}`)
            client.commands.set(pull.config.name, pull)

        }
    }

    ['diversion', 'misc', 'moderacion', 'premium', 'reacciones'].forEach(x => load(x))
}