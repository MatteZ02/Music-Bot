module.exports = async function (client, error, guild) {
    const queue = client.queue.get(guild.id);
    console.error(error);
    queue.voiceChannel.leave();
    client.queue.delete(guild.id);
    return queue.textChannel.send(client.messages.errorDispatcher + `\`${error}\``);
};