const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: 'ping',
    description: 'Displays the bot ping',
  
   run: async (client, interaction) => {

    const embed = new EmbedBuilder()
    .setDescription(`${client.ws.ping} Ms`)

    interaction.followUp({ embeds: [embed] });

   }
}
