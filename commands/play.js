const YouTube = require("simple-youtube-api");
const ytdl = require("ytdl-core");
const ytsr = require("ytsr");

module.exports = {
  name: "play",
  alias: ["p", "music"],
  usage: "<song name>",
  description: "Play some music.",
  category: "music",
  async execute(msg, args, client, Discord, command) {

    const youtube = new YouTube(client.config.api_key);
    const searchString = args.slice(1).join(" ");
    const url = args[1] ? args[1].replace(/<(.+)>/g, "$1") : "";
    const queue = client.queue.get(msg.guild.id);
    const voiceChannel = msg.member.voice.channel;
    if (!queue) {
      if (!msg.member.voice.channel)
        return msg.channel.send(client.messages.noVoiceChannel);
    } else {
      if (voiceChannel !== queue.voiceChannel)
        return msg.channel.send(client.messages.wrongVoiceChannel);
    }
    if (!args[1]) return msg.channel.send(client.messages.noQuery);
    if (voiceChannel.full) return msg.channel.send(client.messages.channelFull);
    if (!voiceChannel.joinable)
      return msg.channel.send(client.messages.noPermsConnect);
    if (!voiceChannel.speakable)
      return msg.channel.send(client.messages.noPermsSpeak);
    if (ytdl.validateURL(url)) {
      client.funcs.handleVideo(
        url,
        msg,
        voiceChannel,
        client,
        false,
        "ytdl"
      );
    } else if (
      url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)
    ) {
      const lmsg = await msg.channel.send(client.messages.loadingSongs);
      const playlist = await youtube.getPlaylist(url);
      const videos = await playlist.getVideos();
      for (const video of Object.values(videos)) {
        const video2 = await youtube.getVideoByID(video.id);
        await client.funcs.handleVideo(
          video2.url,
          msg,
          voiceChannel,
          client,
          true,
          "ytdl"
        );
      }
      const message = client.messages.playlistAdded.replace(
        "%TITLE%",
        playlist.title
      );
      return lmsg.edit(message);
    } else {
      ytsr(searchString, {
        limit: 1
      }, function (err, searchResults) {
        if (err) console.log(err);
        if (!searchResults.items[0]) return msg.channel.send(client.messages.noResults);
        client.funcs.handleVideo(searchResults.items[0].link, msg, voiceChannel, client, false, "ytdl");
      });
    }
  },
};