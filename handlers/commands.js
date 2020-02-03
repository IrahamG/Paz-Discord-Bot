const { readdirSync } = require('fs');

module.exports = (client) => {
    const load = dir => {
        const commands = readdirSync(`./commands/${dir}/`).filter(d => d.endsWith('js'));
        for(let file of commands) {
            const pull = require(`../commands/${dir}/${file}`)
            client.commands.set(pull.config.name, pull)

        }
    }

    ['fun', 'misc', 'moderation', 'owner'].forEach(x => load(x))
}