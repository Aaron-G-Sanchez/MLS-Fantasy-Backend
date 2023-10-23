const { Player, User } = require('../src/models')
const { db } = require('./connection')
const playerData = require('./data/demoPlayerData.json')
const userData = require('./data/demoUserData.json')

const seedSync = async () => {
  // console.log(data.players)
  await db.sync({ force: true })
  await Player.bulkCreate(playerData.players)
  await User.bulkCreate(userData.users)
  // console.log('Seed has been planted')
}

// seedDb()

module.exports = seedSync
