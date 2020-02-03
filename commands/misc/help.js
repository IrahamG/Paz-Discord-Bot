const { RichEmbed } = require('discord.js');
const { prefix } = require('../../config.json');
const { readdirSync } = require('fs');

module.exports.run = async(client, message, args) => {
    const embed = new RichEmbed()
        .setColor('#ff87d9')
        .setAuthor('Listado de comandos de Paz', client.user.displayAvatarURL, '')
        .setThumbnail(client.user.displayAvatarURL)

        if(!args[0]) {
            const categories = readdirSync('./commands/')

            embed.setDescription(`Estos son los comandos disponibles para ${message.guild.me.displayName}\n El prefijo es: **${prefix}**`)
            embed.setFooter(`© Paz Bot | Commandos totales: ${client.commands.size}`, client.user.displayAvatarURL)

            categories.forEach(category => {
                const dir = client.commands.filter(c => c.config.category === category)
                const capitalize = category.slice(0, 1).toUpperCase() + category.slice(1)
                try {
                    embed.addField(`> ${capitalize} `, dir.map(c => `\`${c.config.name}\``).join(' '))
                } catch (error) {
                    console.log(error);
                    message.channel.send('Algo sucedio al ejecutar el comando')
                }
            })

            return message.channel.send(embed)

        } else {
            let command = client.commands.get(args[0].toLowerCase())
            if(!command) return ('Comando invalido, seguro que existe?')
            command = command.config

            embed.setDescription(`El prefijo del bot es: \`${prefix}\`\n
            **Comando: ** ${command.name.slice(0, 1).toUpperCase() + command.name.slice(1)}\n
            **Descripcion: ** ${command.description || 'Ninguna descripcion disponible.'}\n
            **Uso: ** ${command.usage ? `\`${prefix}${command.name} ${command.usage}\`` : 'Sin uso especifico'}\n
            **Accesibilidad: ** ${command.access || 'General'}`)

            return message.channel.send(embed)
        }

}

module.exports.config = {
    name: 'help',
    description: 'Listado de los comandos disponibles',
    category: 'misc',
    usage: '<Nombre del comando>',
}