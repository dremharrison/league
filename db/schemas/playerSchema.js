const Schema = require('mongoose').Schema
const teamSchema = require('./teamSchema')

const playerSchema = new Schema({
  name: 'String',
  age: Number,
  gender: 'String',
  position: 'String',
  picurl: 'String'
})

module.exports = playerSchema