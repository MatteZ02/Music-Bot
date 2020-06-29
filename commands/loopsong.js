module.exports = {
    name: 'loopsong',
    alias: ["none"],
    usage: '',
    description: 'loop the currently playing song.',
    category: 'music',
    async execute(msg, args, client, Discord, command) {
        const queue = client.queue.get(msg.guild.id);
        if (!queue.songLooping) {
            queue.songLooping = true;
            let message;
            message = client.messages.loopingSong.replace("%TITLE%", queue.songs[0].title);
            msg.channel.send(message);
        } else {
            queue.songLooping = false;
            msg.channel.send(client.messages.noLoopingSong);
        }
    }
};