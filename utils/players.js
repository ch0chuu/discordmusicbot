const { getVoiceConnection } = require('@discordjs/voice')

function isMusicPlaying(guildId) {
  const connection = getVoiceConnection(guildId)
  return connection && global.musicQueue.isPlaying
}

module.exports = { isMusicPlaying }
