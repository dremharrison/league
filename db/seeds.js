require('dotenv').config()
const mongoose = require('mongoose')
const League = require('../models/League')
const Team = require('../models/Team')

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

    // create new test Homework data
    const league1 = new League({
      name: 'Premier League',
      location: 'England',
      sport: 'Soccer',
      adult: 'true',
      numOfDivisions: 3,
      teams: [ team1, team2 ]
    })
    const league2 = new League({
      name: 'MLS',
      location: 'USA',
      sport: 'Soccer',
      adult: 'true',
      numOfDivisions: 3,
      teams: [ team1, team2 ]
    })
    const league3 = new League({
      name: 'La Liga',
      sport: 'Soccer',
      location: 'Spain',
      adult: 'true',
      numOfDivisions: 3,
      teams: [ team1, team2 ]
    })
    const league4 = new League({
      name: 'Bundesliga',
      sport: 'Soccer',
      location: 'Germany',
      adult: 'false',
      numOfDivisions: 3,
      teams: [ team1, team2 ]
    })

    const leagues = [ league1, league2, league3, league4 ]

    // save test data
    return League.insertMany(leagues)
  })
  .then(() => {

    // close the database
    mongoose.connection.close()
  })