const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')
const { searchYouTube } = require('../utils/youtube')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('검색')
    .setDescription('유튜브에서 음악을 검색하여 재생합니다.')
    .addStringOption(option =>
      option.setName('노래').setDescription('검색할 노래 제목을 입력하세요').setRequired(true)
    ),

  async execute(interaction) {
    const query = interaction.options.getString('노래')
    await interaction.deferReply() // 응답 지연 방지

    const video = await searchYouTube(query)

    if (!video) {
      return interaction.editReply({ content: '❌ 검색 결과가 없습니다.', ephemeral: true })
    }

    // 🎵 검색 결과 Embed 메시지 생성
    const embed = new EmbedBuilder()
      .setTitle(video.title)
      .setURL(video.url)
      .setDescription('유튜브에서 찾은 음악입니다!')
      .setThumbnail(video.thumbnail)
      .setColor('#ff0000')

    await interaction.editReply({ content: `✅ **${video.title}**`, embeds: [embed] })
  },
}
