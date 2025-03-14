const { REST, Routes } = require('discord.js')
const { token, clientId } = require('../config/config')
const fs = require('fs')
const path = require('path')

module.exports = async (client) => {
  console.log(`✅ Logged in as ${client.user.tag}`)

  // 명령어 등록
  const commands = []
  const commandFiles = fs.readdirSync(path.join(__dirname, '../commands')).filter(file => file.endsWith('.js'))

  for (const file of commandFiles) {
    const command = require(`../commands/${file}`)
    commands.push(command.data.toJSON())
    client.commands.set(command.data.name, command)
  }

  const rest = new REST({ version: '10' }).setToken(token)
  try {
    console.log('📢 Registering commands...')
    await rest.put(Routes.applicationCommands(clientId), { body: commands })
    console.log('✅ Commands registered successfully!')
  } catch (error) {
    console.error('❌ Error registering commands:', error)
  }
}
