// const player1 = new Player({
//     name: 'Josef Martinez',
//     age: 24,
//     gender: 'M',
//     position: 'Striker',
//     jerseynum: 7,
//     picurl: ''
//   })

  

const Schema = require('mongoose').Schema
const teamSchema = require('./teamSchema')

const playerSchema = new Player({
  name: 'Josef Martinez',
  age: 24,
  gender: 'M',
  position: 'Striker',
  jerseynum: 7,
  picurl: ''
})

module.exports = leagueSchema