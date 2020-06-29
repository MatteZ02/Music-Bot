const { emojis } = require("../../config.js");

module.exports = {
  emojis: emojis,
  alreadyPaused: emojis.redx + "The music is already paused!",
  alreadyVoted: emojis.redx + "You have already voted to skip!",
  announceSongs: emojis.megaPhone + "Current setting:",
  announceSongsFalse:
    emojis.green_check_mark + "announcesongs now set to `false`!",
  announceSongsTrue:
    emojis.green_check_mark + "announcesongs now set to `true`!",
  bassApplied:
    emojis.volumeHigh + "The bass level **%BASS%** has been applied!",
  bassFalse: emojis.green_check_mark + "Bass is now false!",
  bassLevel: emojis.green_check_mark + "Bass level is now",
  boolean: emojis.redx + "Please define a boolean! (true/false)",
  cancellingVideoSelection: emojis.redx + "Cancelling video selection",
  cantSkipToCurrent:
    emojis.redx + "You can't skip to the song currently playing!",
  channelAdded:
    emojis.green_check_mark + "Channel %CHANNEL% added to the blacklist!",
  channelAlreadyBlackListed:
    emojis.redx + "That channel is already blacklisted!",
  channelFull: emojis.redx + "Your voice channel is full!",
  channelNotBlackListed:
    emojis.redx + "That channel is not blacklisted or does not exist!",
  channelRemoved:
    emojis.green_check_mark +
    "Channel %CHANNEL% has been removed from the blacklist!",
  correctUsage: emojis.redx + "correct usage: ",
  currentBass: emojis.loudSound + "The current bass is: ",
  currentDefaultBass: emojis.speaker + "Currect default bass level: ",
  currentDefaultVolume: emojis.speaker + "Current default volume is:",
  currentNigthCore: emojis.speaker + "Currect Nigthcore setting: ",
  currentPrefix: "Current prefix:",
  currentVolume: emojis.loudSound + "The current volume is: ",
  defaultVolumeMax:
    emojis.redx +
    "The default volume must be below `100` for quality and safety resons.",
  defaultVolumeNumber:
    emojis.redx +
    "I'm sorry, But the default volume needs to be a valid __number__.",
  defaultVolumeSet: emojis.green_check_mark + "Default volume set to:",
  devMode:
    emojis.redx +
    "Dev mode has been turned on! Commands are only available to developer(s)!",
  disableNigthCore:
    emojis.redx + "Please disable nigthCore in order to use this command!",
  dispatcherError: "Error with the dispatcher: ",
  error: emojis.redx + "An error occured!.\nError: ",
  errorConnecting: "Error with connecting to voice channel: ",
  errorDetected: "Error detected: ",
  errorDispatcher:
    emojis.redx +
    "An error has occured while playing music! The queue has been deleted.\nError: ",
  errorExe: emojis.redx + "there was an error trying to execute that command!",
  helpCmdFooter: "Command Alias:",
  helpFooter:
    '"%PREFIX%help <command>" to see more information about a command.',
  helpTitle: "help",
  leftAlone: "I have left the channel as i was left alone.",
  loadingSongs: emojis.loading + "Loading song(s)",
  looping: emojis.repeat + "Looping the queue now!",
  loopingSong: emojis.repeatSong + "Looping **%TITLE%** now!",
  maxBass: emojis.redx + "The max bass is `100`!",
  maxVolume: emojis.redx + "The max volume is `100`!",
  mentionChannel: emojis.redx + "Please mention a channel!",
  nigthCoreApplied:
    emojis.green_check_mark +
    "NigthCore is now **%BOOLEAN%** this will be applied when the next song starts playing!",
  noLooping: emojis.repeat + "No longer looping the queue!",
  noLoopingSong: emojis.repeatSong + "No longer looping the song!",
  noPermsConnect:
    emojis.redx +
    "I cannot connect to your voice channel, make sure I have the proper permissions!",
  noPermsEmbed:
    emojis.redx +
    "I cannot send embeds (Embed links), make sure I have the proper permissions!",
  noPermsManageRoles:
    emojis.redx +
    "I cannot create roles (Manage roles), make sure I have the proper permissions! I will need this permission to create a `DJ` role since i did not find one!",
  noPermsManageSettings:
    emojis.redx +
    "You need the `MANAGE_SERVER` permission to change the settings!",
  noPermsSpeak:
    emojis.redx +
    "I cannot speak in your voice channel, make sure I have the proper permissions!",
  noPermsUseExternalEmojis:
    emojis.redx +
    "I cannot use external emojis, make sure I have the proper permissions!",
  noPreviousSongs: emojis.redx + "No previous songs!",
  noQuery: emojis.redx + "you need to use a link or search for a song!",
  noResults: emojis.redx + "I could not obtain any search results!",
  noServerQueue: emojis.redx + "There is nothing playing!",
  noSongs: emojis.redx + "That song does not exist!",
  noSongsInQueue: emojis.redx + "There are no songs in the queue!",
  nowPlayingDesc: emojis.notes + "**Now playing:**",
  notEnoughVotes: emojis.redx + "Not enough votes!",
  notPaused: emojis.redx + "The music in not paused!",
  noVoiceChannel:
    emojis.redx +
    "I'm sorry but you need to be in a voice channel to play music!",
  nowPlaying: "__Now playing__",
  paused: emojis.pause + "Paused the music!",
  playlistAdded:
    emojis.green_check_mark +
    "Playlist: **%TITLE%** has been added to the queue!",
  positiveBass: emojis.redx + "The bass needs to be a positive number!",
  positiveVolume: emojis.redx + "The volume needs to be a positive number!",
  provideANumber:
    "Please provide a number ranging from 1-10 to select one of the search results.",
  provideASong:
    emojis.redx + "Please provide a song position in queue for me to remove!",
  queueDesc:
    "**Now playing:** %SONG%<a:aNotes:674602408105476106>\n:arrow_down: Next in queue :arrow_down:",
  queueFooter: "songs in the queue!",
  queueLength: emojis.redx + "There are only %SONGS% song(s) in the queue!",
  queueTitle: "__Song queue__",
  quotaReached:
    emojis.redx +
    "Quota reached please try again after midnight Pacific Time (PT)!",
  removed: emojis.garbage + "removed `%SONG%` from the queue!",
  resumed: emojis.resume + "Resumed the music!",
  seekingPointPositive:
    emojis.redx + "The seeking point needs to be a positive number!",
  seekMax:
    emojis.redx +
    "The lenght of this song is %LENGTH% seconds! You can't seek further than that!",
  setVolume: emojis.volumeHigh + "I set the volume to: ",
  shuffled: emojis.shuffle + "Queue suffled!",
  skipped: emojis.skip + "Skipped the song!",
  songAdded:
    emojis.green_check_mark + "**%TITLE%** has been added to the queue!",
  songsAdded: emojis.green_check_mark + "%AMOUNT% songs added to the queue!",
  songSelection: "__Song Selection__",
  startPlaying: emojis.notes + "Start playing: ",
  stop: emojis.stop + "Stopped the music!",
  validNumber:
    emojis.redx + "I'm sorry, But you need to enter a valid __number__.",
  wrongVoiceChannel:
    emojis.redx +
    "I'm sorry but you need to be in the same voice channel as i am to use this command!",
};
