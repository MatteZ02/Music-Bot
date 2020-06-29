module.exports = {
  name: "nowplaying",
  alias: ["np", "playing"],
  usage: "",
  description: "See the currently playing song position and length.",
  category: "music",
  async execute(msg, args, client, Discord, command) {
    const queue = client.queue.get(msg.guild.id);
    if (!queue) return msg.channel.send(client.messages.noServerQueue);
    let songTime = (queue.songs[0].info.lengthSeconds * 1000).toFixed(0);
    let completed = (
      queue.connection.dispatcher.streamTime + queue.time
    ).toFixed(0);
    let barlength = 30;
    let completedpercent = ((completed / songTime) * barlength).toFixed(0);
    let array = [];
    for (let i = 0; i < completedpercent - 1; i++) {
      array.push("⎯");
    }
    array.push("🔘");
    for (let i = 0; i < barlength - completedpercent - 1; i++) {
      array.push("⎯");
    }
    const embed = new Discord.MessageEmbed()
      .setTitle(client.messages.nowPlaying)
      .setDescription(
        `${client.messages.nowPlayingDesc} ${
          queue.songs[0].title
        }\n\`${array.join("")}\`\n\`${client.funcs.msToTime(
          completed,
          "hh:mm:ss"
        )} / ${client.funcs.msToTime(songTime, "hh:mm:ss")}\`\nchannel: \`${queue.songs[0].info.author.name}\``
      )
      .setFooter(`Queued by ${queue.songs[0].author.tag}`)
      .setURL(queue.songs[0].url)
      .setThumbnail(queue.songs[0].info.thumbnail.thumbnails[4].url)
      .setColor(client.config.embedColor);
    if (queue.nigthCore)
      embed.setDescription(
        `${client.messages.nowPlayingDesc} ${queue.songs[0].title} \nchannel: \`${queue.songs[0].info.author.name}\``
      );
    return msg.channel.send(embed);
  },
};