/*Replicates what the user said in the command as arguments*/ 
module.exports = {
    name: 'say',
    description: 'Paz dice lo que tu quieras que diga',
    args: true,
    usage: '<Dialogo>',
    cooldown: 5,
    execute(message, args) {
        message.delete();  //Deletes the message sent
        const texto = args.join(' ');  //Joins all the arguments with a space in between
        try {
            message.channel.send(texto);
        } catch (error) {
            message.reply('No pude enviar ese mensaje, lo siento');
            console.error(error);
        }
    }
}