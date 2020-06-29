module.exports = {
    name: 'previous',
    alias: ["prev", "return", "back"],
    usage: '',
    description: 'Play the previous song.',
    category: 'music',
    async execute(msg, args, client, Discord, command) {
        const queue = client.queue.get(msg.guild.id)
        if (queue.prevSongs.length < 1) return msg.channel.send(client.messages.noPreviousSongs);
        queue.endReason = "previous";
        queue.connection.dispatcher.end()
        msg.channel.send(client.messages.previousSong)
    }
};