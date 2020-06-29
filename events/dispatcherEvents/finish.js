module.exports = async function (client, reason, guild) {
  const queue = client.queue.get(guild.id);
  queue.playing = false;
  if (reason === "seek") {
    return (queue.playing = true);
  }

  if (!queue.songLooping) {
    if (queue.looping) {
      queue.songs.push(queue.songs[0]);
    }

    queue.time = 0;
    queue.votes = 0;
    queue.voters = [];
    if (reason !== "replay") {
      if (reason === "previous") queue.songs.unshift(queue.prevSongs.pop())
      if (reason !== "previous") queue.prevSongs.push(queue.songs.shift());
    }
  }
  client.funcs.play(guild, queue.songs[0], client, 0, true);
};