/*This command reloads a command and aplies any change made to it*/
module.exports = {
    name: 'reload',
    description: 'Recarga un comando',
    args: true,
    execute(message, args) {
        //Can only be executed by me 
        if(message.author.id === '270666964769177610'){
            const commandName = args[0].toLowerCase();  //Converts the argument to lower case
            const command = message.client.commands.get(commandName) 
                || message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

            //If the command doesn't exists, sends the warning
            if (!command) return message.channel.send(`No hay un comando con ese nombre o alias \`${commandName}\`, ${message.author}!`);

            delete require.cache[require.resolve(`./${commandName}.js`)];

            try {
                const newCommand = require(`./${commandName}.js`);
                message.client.commands.set(newCommand.name, newCommand);
            } catch (error) {
                console.log(error);
                message.channel.send(`Ha habido un error recargando el comando \`${commandName}\`:\n\`${error.message}\``);
            }

            message.channel.send(`El comando \`${command.name}\` ha sido recargado, besos!`);
        } else {
            message.reply('No puedes hacer eso tu amiguito');
        }
    } 
};