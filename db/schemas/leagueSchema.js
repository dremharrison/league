const Schema = require('mongoose').Schema
const teamSchema = require('./teamSchema')

const leagueSchema = new Schema({
  name: String,
  location: String,
  sport: String,
  adult: String,
  numOfDivisions: Number
})

module.exports = leagueSchema