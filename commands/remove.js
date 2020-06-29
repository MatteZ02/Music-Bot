module.exports = {
  name: "remove",
  alias: ["rm", "delete", "del"],
  usage: "<song pos>",
  description: "Remove a song from the queue",
  category: "music",
  execute(msg, args, client, Discord, command) {
    const queue = client.queue.get(msg.guild.id);
    if (!args[1]) return msg.channel.send(client.messages.provideASong);
    const pos = parseInt(args[1]);
    if (isNaN(pos)) return msg.channel.send(client.messages.validNumber);
    if (pos < 1) return msg.channel.send(client.messages.noSongs);
    let message1;
    let message2;
    message1 = client.messages.queueLength.replace(
      "%SONGS%",
      queue.songs.length - 1
    );
    if (pos < 0) return msg.channel.send(client.messages.noSongsInQueue);
    if (pos >= queue.songs.length) return msg.channel.send(message1);
    message2 = client.messages.removed.replace(
      "%SONG%",
      queue.songs[pos].title
    );
    msg.channel.send(message2);
    return queue.songs.splice(pos, 1);
  },
};