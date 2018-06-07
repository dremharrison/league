
const mongoose = require('mongoose')
const leagueSchema = require('../db/schemas/leagueSchema')

const League = mongoose.model('league', leagueSchema)

module.exports = League