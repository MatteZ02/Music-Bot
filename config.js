require("dotenv/config");

module.exports = {
  token: process.env.TOKEN,
  api_key: process.env.GOOGLE_API_KEY,
  embedColor: "#b50002",
  prefix: "!",
};

module.exports.streamConfig = {
  ytdlOptions: {
    filter: "audio",
    highWaterMark: 1 << 15,
    volume: false,
    requestOptions: {
      maxRedirects: 4
    }
  },
  options: {
    seek: null,
    bitrate: 1024,
    volume: 1,
    type: "converted",
  },
}

module.exports.emojis = {
  garbage: "🗑️ ",
  green_check_mark: "<:green_check_mark:674265384777416705> ",
  loading: "<a:loading:674284196700618783> ",
  loudSound: ":loud_sound: ",
  megaPhone: "📣 ",
  notes: "<a:aNotes:674602408105476106>",
  pause: "<:pause:674685548610322462> ",
  previous: "<:reverse:705012312142119012> ",
  redx: "<:redx:674263474704220182> ",
  repeat: "<:repeat1:674685561377914892> ",
  repeatSong: "<:repeatsong:674685573419761716> ",
  resume: "<:resume:674685585478254603> ",
  shuffle: "<:shuffle:674685595980791871> ",
  signal: ":signal_strength: ",
  skip: "<:skip:674685614221688832> ",
  speaker: ":speaker: ",
  stop: "<:stop:674685626108477519> ",
  stopWatch: ":stopwatch: ",
  volumeHigh: "<:volumehigh:674685637626167307> ",
}