/*This command reloads a command and aplies any change made to it*/
module.exports.run = async(client, message, args) => {
        //Can only be executed by me 
        if(!message.author.id === '270666964769177610') return message.reply('Solo mi padre puede hacer eso');

        if(!args[0]) return message.channel.send('Padre, olvidas como se usa esto?');
        
        let commandName = args[0].toLowerCase();

        try {
            delete require.cache[require.resolve(`./${commandName}.js`)]
            client.commands.delete(commandName)
            const pull = require(`./${commandName}.js`)
            client.commands.set(commandName, pull)
        } catch (error) {
            console.log(error)
            return message.reply('Algo sucedio al recargar el comando')
        }

        message.channel.send(`El comando \`${args[0]}\` ha sido recargado, besos!`);
    } 

module.exports.config = {
    name: 'reload',
    description: 'Recarga un comando',
    args: true
}