module.exports = {
  name: "ready",
  async execute(client) {
    client.user.setActivity(`@${client.user.username} help | 🎶`, {
      type: "LISTENING",
    });
    client.user.setStatus("online");
    console.log(`- Activated -`);
  },
};