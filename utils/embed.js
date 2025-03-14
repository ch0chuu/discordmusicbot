const { EmbedBuilder } = require('discord.js')

function createSetupEmbed() {
  return new EmbedBuilder()
    .setTitle('🎶 음악 봇 설정 완료')
    .setDescription('이곳에서 음악을 검색하고 재생할 수 있습니다.\n\n**명령어 예시:**\n🔍 `/검색 [노래 제목]` → 음악 검색\n⏯ `/재생` → 음악 재생\n⏭ `/스킵` → 현재 곡 스킵\n⏹ `/정지` → 음악 중지 및 큐 초기화')
    .setColor('#ffcc00')
    .setFooter({ text: '🎵 현재 재생 중: 없음' })
}

module.exports = { createSetupEmbed }
