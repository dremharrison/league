const mongoose = require('mongoose')
const playerSchema = require('../db/schemas/playerSchema')

const League = mongoose.model('player', playerSchema)

module.exports = League