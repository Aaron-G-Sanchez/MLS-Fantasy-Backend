const { describe, test, expect, beforeAll } = require('@jest/globals')
const { Player } = require('../src/models')
const seedSync = require('../db/seed')

beforeAll(async () => {
  await seedSync()
})

describe('Player model tests', () => {
  test('Should read all the players in the db', async () => {
    const playerArray = await Player.findAll()

    expect(Array.isArray(playerArray)).toBe(true)
    expect(playerArray[0]).toBeInstanceOf(Player)
  })
})
