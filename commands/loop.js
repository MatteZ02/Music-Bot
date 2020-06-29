module.exports = {
    name: 'loop',
    alias: [],
    usage: '',
    description: 'loop the queue.',
    category: 'music',
    async execute(msg, args, client, Discord, command) {
        const queue = client.queue.get(msg.guild.id);
        if (!queue.looping) {
            queue.looping = true;
            msg.channel.send(client.messages.looping);
        } else {
            queue.looping = false;
            msg.channel.send(client.messages.noLooping);
        }
    }
};