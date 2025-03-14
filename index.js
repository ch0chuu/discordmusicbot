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
  if (file === 'ready.js') {
    client.once('ready', () => event(client))
  } else {
    client.on(file.replace('.js', ''), event)
  }
}

// 봇 실행
client.login(token)
