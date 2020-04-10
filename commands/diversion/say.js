/*Replicates what the user said in the command as arguments*/ 
module.exports.run = async(client, message, args) => {  

        if(!args[0]) return message.channel.send('Que quieres que diga?')

        await message.delete();

        const texto = args.join(' ')  //Joins all the arguments with a space in between
        try {
            message.channel.send(texto)
        } catch (error) {
            message.reply('No pude enviar ese mensaje, lo siento')
            console.error(error)
        }
    }

module.exports.config = {
    name: 'say',
    description: 'Paz dice lo que tu quieras que diga',
    category: 'diversion',
    args: true,
    usage: '<Diálogo>',
    cooldown: 5
}
