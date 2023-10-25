const { db, DataTypes } = require('../../db/connection')

const Player = db.define('Player', {
  apiId: DataTypes.INTEGER,
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
  injured: DataTypes.BOOLEAN,
  position: DataTypes.STRING
})

module.exports = Player
