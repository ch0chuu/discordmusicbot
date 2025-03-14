const { Events } = require('discord.js')

module.exports = {
  name: Events.InteractionCreate,
  async execute(interaction) {
    if (!interaction.isButton()) return

    const queue = global.musicQueue // 음악 재생 상태

    if (interaction.customId === 'stop_music') {
      queue.stop()
      await interaction.reply({ content: '⏹ 음악이 정지되었습니다!', ephemeral: true })
    } else if (interaction.customId === 'pause_music') {
      queue.pause()
      await interaction.reply({ content: '⏯ 음악이 일시정지되었습니다!', ephemeral: true })
    } else if (interaction.customId === 'skip_music') {
      queue.skip()
      await interaction.reply({ content: '⏭ 다음 곡으로 스킵되었습니다!', ephemeral: true })
    }
  },
}
