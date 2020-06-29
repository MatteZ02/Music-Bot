module.exports = {
  name: "seek",
  alias: ["none"],
  usage: "<point in song (seconds)>",
  description: "Seek to a specific point in the currently playing song.",
  category: "music",
  async execute(msg, args, client, Discord, command) {
    const queue = client.queue.get(msg.guild.id);
    if (queue.nigthCore)
      return msg.channel.send(client.messages.disableNigthCore);
    if (!args[1])
      return msg.channel.send(
        `${client.messages.correctUsage}\`${
            client.config.prefix
          }seek ${command.usage}\``
      );
    const pos = parseInt(args[1]);
    if (isNaN(pos)) {
      if (pos < 0)
        return msg.channel.send(client.messages.seekingPointPositive);
      let message;
      message = client.messages.seekMax.replace(
        "%LENGTH%",
        queue.songs[0].info.lengthSeconds
      );
      if (pos > queue.songs[0].info.lengthSeconds) return msg.channel.send(message);
    }
    client.funcs.end(client, msg, pos, command);
  },
};