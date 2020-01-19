const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

//Creates a collection with all the files inside the commands folder that end with .js
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

const cooldowns = new Discord.Collection();

//Iterates with all the commands stored con the commandFiles constant
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

//Ready 
client.once('ready', () => {
    console.log('Ready!');
})

//Commands
client.on('message', message => {

    //Gets out of the method if the message doesn't start with the prefix or the message is sent by a bot
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    //Slices the prefix and leaves only the command
    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();

    //Creates a constant named command with the name of the command or one of the aliases
    const command = client.commands.get(commandName)
        || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    //If the command does not exist, exits the method
    if (!command) return;

    //Checks if the command is for guilds only and returns if it is and was performed in a DM
    if(command.guildOnly && message.channel.type != 'text') {
        return message.reply('No puedo ejecutar eso dentro de mensajes privados');
    }

    //If the command exists, but no arguments were passed, returns the corresponding warning and suggestion
    if(command.args && !args.length) {
        let reply = `No has proporcionado ningun argumento, ${message.author}!`;

        if(command.usage) {
            reply += `\nEl uso apropiado seria: \`${prefix}${command.name} ${command.usage}\``;
        }

        return message.channel.send(reply);
    }

    //Establishes a cooldown for the commands
    if (!cooldowns.has(command.name)) {
        cooldowns.set(command.name, new Discord.Collection());
    }

    const now = Date.now();
    const timestamps = cooldowns.get(command.name);
    const cooldownAmount = (command.cooldown || 3) * 1000;

    if (timestamps.has(message.author.id)) {
        const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

        if (now < expirationTime) {
            const timeLeft = (expirationTime - now) / 1000;
            return message.reply(`Por favor espere ${timeLeft.toFixed(1)} segundos mas antes de volver a usar \`${command.name}\``);
        }
    }
    
    timestamps.set(message.author.id, now);
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

    //If it exists, access the collection and exeutes the command
    try{
        command.execute(message, args);
    } catch(error) {
        console.error(error);
        message.reply('Algo sucedo al ejecutar ese comando, lo siento.');
    }

    
})

client.login(token);