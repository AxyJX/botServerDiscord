const { Events } = require('discord.js');

const { startChannel } = require('../config.json');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		const channel = client.channels.cache.get(startChannel);
		console.log(`Ready! Logged in as ${client.user.tag}`);
		channel.send('Minecraft Server is Up @everyone')
  .then(message => console.log(`Sent message: ${message.content}`))
  .catch(console.error);
	},
};

