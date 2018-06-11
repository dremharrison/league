const mongoose = require('mongoose')
const leagueSchema = require('../db/schemas/playerSchema')

const League = mongoose.model('player', playerSchema)

module.exports = League