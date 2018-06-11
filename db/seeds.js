require('dotenv').config()
const mongoose = require('mongoose')
const League = require('../models/League')
const Team = require('../models/Team')
const Player = require('../models/player')

// Connect to Database
mongoose.connect('mongodb://localhost/league')
  .then(() => {
    console.log('connected to mongoDB')
  })
  .catch((err) => {
    console.log('ERROR', err)
  })

// Remove old Homework Data
League.remove().then(() => {
  const team1 = new Team({
    name: 'Chelsea FC',
    logourl: 'http://media.chelseafconline.com/2017/09/football-2699594_1920-770x515.jpg',
    manager: 'Antonio Conte',
    numOfPlayers: 22,
    division: 1
  })

  const team2 = new Team({
    name: 'Arsenal FC',
    logourl: 'https://i2-prod.mirror.co.uk/incoming/article6478698.ece/ALTERNATES/s482b/Arsenal-logo.jpg',
    manager: 'Arsene Wegner',
    numOfPlayers: 22,
    division: 1
  })

  const team3 = new Team({
    name: 'Arsenal FC',
    logourl: 'https://i2-prod.mirror.co.uk/incoming/article6478698.ece/ALTERNATES/s482b/Arsenal-logo.jpg',
    manager: 'Arsene Wegner',
    numOfPlayers: 22,
    division: 1
  })

  const team4 = new Team({
    name: 'Arsenal FC',
    logourl: 'https://i2-prod.mirror.co.uk/incoming/article6478698.ece/ALTERNATES/s482b/Arsenal-logo.jpg',
    manager: 'Arsene Wegner',
    numOfPlayers: 22,
    division: 1
  })



  // create new test Homework data
  const league1 = new League({
    name: 'Premier League',
    location: 'England',
    sport: 'Soccer',
    adult: 'true',
    numOfDivisions: 3,
    teams: [team1, team2]
  })
  const league2 = new League({
    name: 'MLS',
    location: 'USA',
    sport: 'Soccer',
    adult: 'true',
    numOfDivisions: 3,
    teams: [team1, team2]
  })
  const league3 = new League({
    name: 'La Liga',
    sport: 'Soccer',
    location: 'Spain',
    adult: 'true',
    numOfDivisions: 3,

  })
  const league4 = new League({
    name: 'Bundesliga',
    sport: 'Soccer',
    location: 'Germany',
    adult: 'false',
    numOfDivisions: 3,
    teams: [team1, team2]
  })

  const player1 = new Player({
    name: 'Josef Martinez',
    age: 24,
    gender: 'M',
    position: 'Striker',
    jerseynum: 7,
    picurl: ''
  })
  const player2 = new Player({
    name: 'Pele',
    age: 77,
    gender: 'M',
    position: 'Striker',
    jerseynum: 10,
    picurl: ''
  })
  const player3 = new Player({
    name: 'Robinho',
    age: 34,
    gender: 'M',
    position: 'Midfield',
    jerseynum: 70,
    picurl: ''
  })
  const player4 = new Player({
    name: 'Ronaldhino',
    age: 38,
    gender: 'M',
    position: 'Forward',
    jerseynum: 10,
    picurl: ''
  })

  const leagues = [league1, league2, league3, league4]
  const teams = [team1, team2, team3, team4]
  const players = [player1, player2, player3, player4]

  // save test data
  return League.insertMany(leagues)
})
  .then(() => {

    // close the database
    mongoose.connection.close()
  })