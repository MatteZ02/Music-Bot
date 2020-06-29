module.exports = {
	name: 'queue',
	alias: ["q", "list", "ls", "songs"],
	usage: '',
	description: 'See the queue.',
	category: 'music',
	async execute(msg, args, client, Discord, command) {
		const queue = client.queue.get(msg.guild.id);
		if (!queue) return msg.channel.send(client.messages.noServerQueue);
		const page = 1;
		let queuesongs = queue.songs.slice((page - 1) * 20 + 1, page * 20 + 1);
		let queuemessage = `${queuesongs.map(song => `**#** ${song.title}`).join('\n')}`
		const hashs = queuemessage.split('**#**').length;
		for (let i = 0; i < hashs; i++) {
			queuemessage = queuemessage.replace('**#**', `**${i + 1}**`);
		}
		let message;
		message = client.messages.queueDesc.replace("%SONG%", queue.songs[0].title);
		const embed = new Discord.MessageEmbed()
			.setTitle(client.messages.queueTitle)
			.setDescription(`${message}\n${queuemessage}`)
			.setFooter(`${queue.songs.length - 1} ${client.messages.queueFooter}`)
			.setColor(client.config.embedColor)
		return msg.channel.send(embed);
	}
};