const express = require('express')
const router = express.Router({ mergeParams: true })
const League = require('../models/league')
const Team = require('../models/team')
const Player = require('../models/player')


router.get('/', (req, res, next) => {

  League.findById(req.params.leagueId)
    .then((league) => {
      console.log('it works')
      res.render('team/index', 
      {
        league,
        teams: league.teams
      })
      console.log('it def works')
    })
})

// NEW Route
router.get('/new', (req, res) => {
  res.render('player/new', {
    leagueId: req.params.leagueId
  })
})

// CREATE Route
router.post('/', (req, res) => {


  const team = new Team(req.body)

  
  League.findById(req.params.leagueId)
    .then((showLeague) => {

    
      showLeague.teams.push(team)

  
      return showLeague.save()
    })
    .then(() => {

   
      res.redirect(`/League/${req.params.leagueId}/team`)
    })
})


router.delete('/:id', (req, res) => {

})

module.exports = router