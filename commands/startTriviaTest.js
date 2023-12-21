const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("triviastart")
    .setDescription("Replies with Polo"),
  async execute(interaction) {
    await interaction.channel.send("!start");
  },
};
