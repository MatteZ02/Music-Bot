const ytdl = require("ytdl-core");
const ytsr = require("ytsr");
const ytpl = require("ytpl");

module.exports = {
  name: "play",
  alias: ["p", "music"],
  usage: "<song name>",
  description: "Play some music.",
  category: "music",
  async execute(msg, args, client, Discord, command) {

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
      const playlist = await ytpl(url).catch((err) => {
        msg.channel.send(client.messages.error + err);
        console.log("Error whilst getting playlist " + err);
    });
    if (!playlist || !playlist.items) return msg.channel.send(client.messages.noResults);
    for (const video of playlist.items) {
        client.funcs.handleVideo(
            video.url,
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
      if (searchString.length > 127) return msg.channel.send(client.messages.noResults);
            const res = await ytsr(searchString, {
                limit: 10
            }).catch((err) => {
                msg.channel.send(client.messages.error + err);
                console.log("Error whilst ytsr" + err);
            });
            if (!res || !res.items[0]) return msg.channel.send(client.messages.noResults);
      const videoResults = res.items.filter(item => item.type == "video");
      if (!videoResults[0]) return msg.channel.send(client.messages.noResults);
      client.funcs.handleVideo(videoResults[0].link, msg, voiceChannel, client, false, "ytdl");
    }
  },
};