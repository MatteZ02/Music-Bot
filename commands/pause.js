module.exports = {
	name: 'pause',
	alias: ["none"],
	usage: '',
	description: 'Pause the currently playing music.',
	category: 'music',
	execute(msg, args, client, Discord, command) {
		const queue = client.queue.get(msg.guild.id);
		if (queue.paused) return msg.channel.send(client.messages.alreadyPaused);
		queue.paused = true;
		queue.connection.dispatcher.pause(true);
		return msg.channel.send(client.messages.paused);
	}
};