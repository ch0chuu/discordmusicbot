const { Client, GatewayIntentBits, Collection } = require('discord.js')
const { token } = require('./config/config')
const fs = require('fs')
const path = require('path')

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildVoiceStates,
  ],
})

client.commands = new Collection()

// 이벤트 핸들러 로드
const eventFiles = fs.readdirSync(path.join(__dirname, 'events')).filter(file => file.endsWith('.js'))
for (const file of eventFiles) {
  const event = require(`./events/${file}`)

  if (event.name && typeof event.execute === 'function') {
    client.on(event.name, event.execute) // ✅ 함수만 등록하도록 수정
  } else {
    console.error(`❌ 잘못된 이벤트 파일: ${file} (execute 함수 없음)`)
  }
}

// 봇 실행
client.login(token)
