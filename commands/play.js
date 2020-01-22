const ytdl = require('ytdl-core');
var serverQueue = new Map();
module.exports = {
    name: 'play',
    description: 'Reproduce una cancion en un canal de voz',
    guildOnly: true,
    args: true,
    usage: '<Nombre o enlace de la cancion>',
    cooldown: 5,
    execute(message, args) {

        message.reply('Este comando se encuentra de momento fuera de servicio');

        /*var songUrl = args[1];

        async function play(message, serverQueue) {
         
            play(message, serverQueue);

            const voiceChannel = message.member.voiceChannel;
            if(!voiceChannel) return message.reply("Debes de estar en un canal de voz");
            const permission = voiceChannel.permissionsFor(message.client.user);
            if(!permission.has('CONNECT') || !permission.has("SPEAK")) {
                return message.channel.send("Necesito permisos para unirme y habalr en chat de voz :(");
            }
         
            const songInfo = await ytdl.getInfo(songUrl);
            const song = {
                title: songInfo.title,
                url: songInfo.video_url
            };
         
            if(!serverQueue) {
                const queueConstruct = {
                    textChannel: message.channel,
                    voiceChannel: voiceChannel,
                    connection: null,
                    songs: [],
                    volume: 5,
                    playing: true,
                };
                queue.set(message.guild.id, queueConstruct);
         
                queueConstruct.songs.push(song);
         
                try{
                    var connection = await voiceChannel.join();
                    queueConstruct.connection = connection;
                    voiceChannel.join();
                    playSong(message.guild, queueConstruct.songs[0]);
                } catch (err) {
                    console.log(err);
                    queue.delete(message.guild.id)
                    return message.channel.send("Ha habudo un error al reproducir");
                }
            } else {
                serverQueue.songs.push(song);
                return message.channel.send(`${song.title} ha sido añadida a la lista`);
            }
        }
         
        function playSong(guild, song) {
            const serverQueue = queue.get(guild.id);
         
            if(!song) {
                serverQueue.voiceChannel.leave();
                queue.delete(guild.id);
                return;
            }
         
            const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
                .on('end', () => {
                    serverQueue.songs.shift();
                    playSong(guild, serverQueue.songs[0]);
                })
                .on('error', error => {
                    console.log(error);
                })
            dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
        }

        */
    } 
} 
