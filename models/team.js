
const mongoose = require('mongoose')
const teamSchema = require('../db/schemas/teamSchema')

const Team = mongoose.model('comment', teamSchema)

module.exports = Team