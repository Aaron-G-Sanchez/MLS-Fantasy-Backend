const { db, DataTypes } = require('../../db/connection')

const Player = db.define('Player', {})

module.exports = {
  Player
}
