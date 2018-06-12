const Schema = require('mongoose').Schema
const playerSchema = require('./playerSchema')

const teamSchema = new Schema({
  name: String,
  logourl: String,
  manager: String,
  numOfPlayers: Number,
  division: Number,
  players:[playerSchema]
})

module.exports = teamSchema