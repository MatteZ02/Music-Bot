module.exports = {
  name: "help",
  alias: ["h"],
  usage: "<command(opt)>",
  description: "List all commands",
  category: "info",
  execute(msg, args, client, Discord, command) {
    if (args[1]) {
      if (!client.commands.has(args[1]))
        return msg.channel.send("That command does not exist");
      const command = client.commands.get(args[1]);
      const embed = new Discord.MessageEmbed()
        .setTitle(`${client.config.prefix}${command.name} ${command.usage}`)
        .setDescription(command.description)
        .setFooter(
          `${client.messages.helpCmdFooter} \`${command.alias.map(
            (a) => `${a}, `
          )}\``
        )
        .setColor(client.config.embedColor);
      msg.channel.send(embed);
    } else {
      const categories = [];
      for (let i = 0; i < client.commands.size; i++) {
        if (!categories.includes(client.commands.array()[i].category))
          categories.push(client.commands.array()[i].category);
      }
      let commands = "";
      for (let i = 0; i < categories.length; i++) {
        commands += `**» ${categories[i].toUpperCase()}**\n${client.commands
          .filter(
            (x) => x.category === categories[i] && !x.omitFromHelp && !x.onlyDev
          )
          .map((x) => `\`${x.name}\``)
          .join(", ")}\n`;
      }
      let message;
      message = client.messages.helpFooter.replace(
        "%PREFIX%",
        client.config.prefix
      );
      const embed = new Discord.MessageEmbed()
        .setTitle(`${client.user.username} ${client.messages.helpTitle}`)
        .setDescription(commands)
        .setFooter(message)
        .setColor(client.config.embedColor);
      msg.channel.send(embed);
    }
  },
};
