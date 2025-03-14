module.exports = async (interaction) => {
    if (!interaction.isCommand()) return
  
    const command = interaction.client.commands.get(interaction.commandName)
    if (!command) return
  
    try {
      await command.execute(interaction)
    } catch (error) {
      console.error('❌ Error executing command:', error)
      await interaction.reply({ content: '⚠️ 명령어 실행 중 오류가 발생했습니다.', ephemeral: true })
    }
  }
  