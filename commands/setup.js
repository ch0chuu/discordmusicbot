const { SlashCommandBuilder } = require('discord.js')
const { createSetupEmbed } = require('../utils/embed')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('셋업')
    .setDescription('음악 전용 채널을 설정합니다.'),

  async execute(interaction) {
    const channel = interaction.channel

    // 채널 ID 저장 (DB 연동 시 저장 가능)
    const setupMessage = await channel.send({ embeds: [createSetupEmbed()] })

    await interaction.reply({
      content: `✅ **${channel.name}** 채널이 음악 전용 채널로 설정되었습니다!`,
      ephemeral: true,
    })
  },
}
