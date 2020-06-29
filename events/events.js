module.exports = function (client) {
    const Discord = require('discord.js');
    const events = './clientEvents/';
    client.on('ready', () => {
        require(`${events}ready.js`).execute(client);
    });
    client.on('message', (msg) => {
        require(`${events}msg.js`).execute(client, msg, Discord);
    });
    client.on('guildCreate', (guild) => {
        require(`${events}guildCreate.js`).execute(client, guild);
    });
    client.on('voiceStateUpdate', (oldState, newState) => {
        require(`${events}voiceStateUpdate.js`).execute(client, oldState, newState);
    });
    client.on('error', (error) => {
        client.channels.fetch(client.config.debug_channel).send(`Error: ${error} on shard: ${client.shard}`);
    });
}