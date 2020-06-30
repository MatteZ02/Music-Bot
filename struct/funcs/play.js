module.exports = async function (guild, song, client, seek, play) {
  const { Readable: ReadableStream } = require("stream");
  const Discord = require("discord.js");
  const ytdl = require("ytdl-core");
  const { streamConfig } = require("../../config.js");
  const prism = require("prism-media");
  const queue = client.queue.get(guild.id);
  if (!song) {
    queue.voiceChannel.leave();
    client.queue.delete(guild.id);
    return;
  }

  streamConfig.options.seek = seek;

  let input = song.url;
  if (song.type === "ytdl")
    input = ytdl(song.url, streamConfig.ytdlOptions).on("error", (err) =>
      console.log(err)
    );

  const ffmpegArgs = [
    "-analyzeduration",
    "0",
    "-loglevel",
    "0",
    "-f",
    "s16le",
    "-ar",
    "48000",
    "-ac",
    "2",
  ];

  const isStream = input instanceof ReadableStream;

  const args = isStream ? ffmpegArgs.slice() : ["-i", input, ...ffmpegArgs];
  args.unshift("-ss", String(seek));

  const transcoder = new prism.FFmpeg({
    args: args,
  });

  const stream = input.pipe(transcoder).on("error", (error) => {
    console.log(error);
  });

  const dispatcher = queue.connection
    .play(stream, streamConfig.options)
    .on("finish", () => {
      client.dispatcher.finish(client, queue.endReason, guild);
    })
    .on("start", () => {
      queue.endReason = null;
      dispatcher.player.streamingData.pausedTime = 0;
    })
    .on("error", (error) => {
      client.dispatcher.error(client, error, guild);
    });
  dispatcher.setVolume(queue.volume / 100);
  if (song.type !== "ytdl") return;
  const embed = new Discord.MessageEmbed()
    .setTitle(`${client.messages.startPlaying}**${song.title}**`)
    .setDescription(
      `Song duration: \`${client.funcs.msToTime(
        queue.songs[0].info.lengthSeconds * 1000,
        "hh:mm:ss"
      )}\``
    )
    .setColor(client.config.embedColor);
  queue.textChannel.send(embed);
  queue.playing = true;
};
