const Schema = require('mongoose').Schema

const teamSchema = new Schema({
  name: String,
  logourl: String,
  manager: String,
  numOfPlayers: Number,
  division: Number
})

module.exports = commentSchema