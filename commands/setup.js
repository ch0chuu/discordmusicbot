const { SlashCommandBuilder } = require('discord.js')
const { createIdleSetup } = require('../ui/setup_idle')
const { createPlayingSetup } = require('../ui/setup_playing')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('셋업')
    .setDescription('음악 전용 채널을 설정합니다.'),

  async execute(interaction) {
    const channel = interaction.channel
    const queue = global.musicQueue // 음악 재생 상태 확인 (예제)

    // 상태에 따라 UI 선택
    const setupData = queue && queue.isPlaying ? createPlayingSetup() : createIdleSetup()

    // 메시지 전송 및 고정
    const setupMessage = await channel.send({ embeds: [setupData.embed], components: setupData.components })
    await setupMessage.pin()

    await interaction.reply({
      content: `✅ **${channel.name}** 채널이 음악 전용 채널로 설정되었습니다!`,
      ephemeral: true,
    })
  },
}
