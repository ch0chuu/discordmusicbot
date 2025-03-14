const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js')

function createPlayingSetup() {
  const embed = new EmbedBuilder()
    .setTitle('🎶 음악 재생 중')
    .setDescription('지금 음악이 재생되고 있습니다!')
    .setColor('#ffcc00')
    .setThumbnail('https://raw.githubusercontent.com/ch0chuu/discordmusicbot/main/image.jpg')
    .setFooter({ text: '🎵 음악을 컨트롤하려면 아래 버튼을 사용하세요!' })

  const row1 = new ActionRowBuilder().addComponents(
    new ButtonBuilder().setCustomId('stop_music').setLabel('⏹ 정지').setStyle(ButtonStyle.Danger),
    new ButtonBuilder().setCustomId('rewind_10s').setLabel('⏪ 10초 전').setStyle(ButtonStyle.Secondary),
    new ButtonBuilder().setCustomId('forward_10s').setLabel('⏩ 10초 후').setStyle(ButtonStyle.Secondary),
    new ButtonBuilder().setCustomId('pause_music').setLabel('⏯ 일시정지').setStyle(ButtonStyle.Primary),
    new ButtonBuilder().setCustomId('skip_music').setLabel('⏭ 스킵').setStyle(ButtonStyle.Success),
    new ButtonBuilder().setCustomId('queue_list').setLabel('📜 대기열').setStyle(ButtonStyle.Primary)
  )

  const row2 = new ActionRowBuilder().addComponents(
    new ButtonBuilder().setCustomId('search_music').setLabel('🔍 음악 검색').setStyle(ButtonStyle.Success),
    new ButtonBuilder().setCustomId('show_commands').setLabel('📜 명령어 보기').setStyle(ButtonStyle.Primary)
  )

  return { embed, components: [row1, row2] }
}

module.exports = { createPlayingSetup }
