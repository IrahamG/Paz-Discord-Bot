const Discord = require('discord.js');
const { prefix } = require('../../config.json');


module.exports = async(client, message) => {

    if(message.author.bot || message.channel.type === "dm") return;

   let messageArray= message.content.split(' ');
   let cmd = messageArray[0];
   let args = messageArray.slice(1);

    let command = client.commands.get(cmd.slice(prefix.length))
        || client.commands.get(client.aliases.get(cmd.slice(prefix.length)))

    if(!message.content.startsWith(prefix)) return;

    if(command) command.run(client, message, args);
}
