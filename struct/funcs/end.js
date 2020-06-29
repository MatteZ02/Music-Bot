module.exports = async function (client, msg, pos, command) {
  const seek = parseInt(pos);
  const queue = client.queue.get(msg.guild.id);
  if (command.name === "seek") {
    queue.time = pos * 1000;
  } else {
    queue.time = queue.connection.dispatcher.streamTime + queue.time;
  }
  queue.connection.dispatcher.end();
  queue.endReason = "seek";
  client.funcs.play(msg.guild, queue.songs[0], client, seek, false);
};
