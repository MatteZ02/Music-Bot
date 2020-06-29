module.exports = function (msg, args, client, Discord, command) {
  const permissions = msg.channel.permissionsFor(msg.client.user);
  if (!permissions.has("EMBED_LINKS"))
    return msg.channel.send(client.messages.noPermsEmbed);
  if (!permissions.has("USE_EXTERNAL_EMOJIS"))
    return msg.channel.send(client.noPermsUseExternalEmojis);
  try {
    command.uses++;
    command.execute(msg, args, client, Discord, command);
  } catch (error) {
    msg.reply(client.messages.errorExe);
    console.error(error);
  }
};