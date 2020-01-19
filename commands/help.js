/*This command returns a PM with all the avaliable commands, their usage, and their arguments */
const { prefix } = require('../config.json');
module.exports = {
    name: 'help',  //Command name
    description: 'Lista de todos mis comandos',  //What the command does
    aliases: ['commands'],  //Other ways the command can be summoned
    usage: '[command name]', //How its used, in case it requires arguments
    cooldown: 5,  //Time until the user can use it again
    execute(message, args) {
        const data = [];
        const { commands } = message.client;

        //If help was used without arguments, saves text in an array and then returns the data on a PM
        if(!args.length) {
            data.push('Aqui hay una lista de todos mis comandos:');
            data.push(commands.map(command => command.name).join(', '));
            data.push(`\nPuedes usar \`${prefix}help [nombre del comando]\` para obtener informacion de un comando especifico`);

            return message.author.send(data, { split: true }) //Splits the message if its too long
                .then(() => {
                    if(message.channel.type === 'dm') return;
                    message.reply('Te he enviado un mensaje con mis comandos!');
                })
                .catch(error => {
                    console.error(`No se pudo enviar la ayuda a ${message.author.tag}.\n`, error);
                    message.reply('Parece que no puedo enviar la ayuda, tienes los mensajes privados desactivados?');
                })
        }

        //Provides help for a specific argument
        const name = args[0].toLowerCase();
        const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

        if(!command) {
            return message.reply('Ese no es un comando valido');
        }

        data.push(`[Nombre]: ${command.name}`);

        if (command.aliases) data.push(`[Alias]: ${command.aliases.join(', ')}`);
        if (command.description) data.push(`[Descripcion]: ${command.description}`);
        if (command.usage) data.push(`[Uso]: ${prefix}${command.name} ${command.usage}`);

        data.push(`[Cooldown]: ${command.cooldown || 3} segundo(s)`);

        message.channel.send(data, { split: true });
    },

};