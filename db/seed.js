const { Player } = require('../src/models')
const { db } = require('./connection')
const data = require('./demoPlayerData.json')

const seedDb = async () => {
  // console.log(data.players)
  await db.sync({ force: true })
  await Player.bulkCreate(data.players)
  console.log('Seed has been planted')
}

seedDb()

// module.exports = seedDb
