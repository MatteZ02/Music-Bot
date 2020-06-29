module.exports = {
	name: 'stop',
	description: 'Stop the music and clear the queue.',
	alias: ["none"],
	usage: '',
	category: 'music',
	execute(msg, args, client, Discord, command) {
		const queue = client.queue.get(msg.guild.id);
		if (msg.content.includes("-force")) {
			if (queue) {
				queue.voiceChannel.leave();
				queue.exists = false;
			}
			if (msg.guild.voice.channel) msg.guild.voice.channel.leave();
			client.queue.delete(guild.id);
			return msg.channel.send(client.messages.stop);
		}
		queue.songs = [];
		queue.looping = false;
		queue.endReason = "stop";
		queue.connection.dispatcher.end();
		msg.channel.send(client.messages.stop);
	}
};