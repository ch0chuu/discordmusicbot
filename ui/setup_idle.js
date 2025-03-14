const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js')

function createIdleSetup() {
  const embed = new EmbedBuilder()
    .setTitle('🎶 음악 셋업 완료')
    .setDescription('음악 재생 중이 아닙니다!')
    .setColor('#ffcc00')
    .setThumbnail('https://raw.githubusercontent.com/ch0chuu/discordmusicbot/main/image.jpg')
    .setFooter({ text: '🎵 음악을 검색하여 재생해보세요!' })

  const row1 = new ActionRowBuilder().addComponents(
    new ButtonBuilder().setLabel('🎵 멜론 인기차트').setURL('https://open.spotify.com/playlist/20R8anptqFQTGk4P2X6dRp').setStyle(ButtonStyle.Link),
    new ButtonBuilder().setLabel('🌎 빌보드 차트').setURL('https://open.spotify.com/playlist/6UeSakyzhiEt4NB3UAd6NQ').setStyle(ButtonStyle.Link),
    new ButtonBuilder().setLabel('🎮 매드무비').setURL('https://open.spotify.com/playlist/0VXGX5HU1jRW7gitfadCmw').setStyle(ButtonStyle.Link)
  )

  const row2 = new ActionRowBuilder().addComponents(
    new ButtonBuilder().setCustomId('search_music').setLabel('🔍 음악 검색').setStyle(ButtonStyle.Success),
    new ButtonBuilder().setCustomId('show_commands').setLabel('📜 명령어 보기').setStyle(ButtonStyle.Primary)
  )

  return { embed, components: [row1, row2] }
}

module.exports = { createIdleSetup }
