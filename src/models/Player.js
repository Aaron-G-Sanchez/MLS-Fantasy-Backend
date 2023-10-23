const { db, DataTypes } = require('../../db/connection')

const Player = db.define('Player', {
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  displayName: DataTypes.STRING,
  number: DataTypes.INTEGER,
  age: DataTypes.INTEGER,
  img: DataTypes.STRING,
  nationality: DataTypes.STRING,
  team: DataTypes.STRING,
  height: DataTypes.INTEGER,
  weight: DataTypes.INTEGER,
  injured: DataTypes.BOOLEAN
})

module.exports = Player
