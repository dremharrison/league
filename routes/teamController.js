const express = require('express')
const router = express.Router({ mergeParams: true })
const League = require('../models/league')
const Team = require('../models/team')



router.get('/', (req, res, next) => {
  // use homeworkID to find Homework assignment
  League.findById(req.params.leagueId).then((listOfLeagues) => {
      res.render('team/index', { listOfLeagues})
    })
    .catch((err) => res.send(err))
})

// NEW Route
router.get('/new', (req, res) => {
  res.render('team/new', {
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

    
      res.redirect(`/league/${req.params.leagueId}`)
    })
})

// SHOW Route
router.get('/:id', (req, res) => {
  League.findById(req.params.leagueId)
    .then((league) => {
      const showTeam = league.teams.id(req.params.id)
      res.render('team/show', { showTeam, leagueId: req.params.leagueId })
    })
})

// DELETE Route
router.delete('/:id', (req, res) => {
  Team.findByIdAndRemove(req.params.id)
  .then(() => {
    console.log('Delete ')
    res.redirect('/league/:id')
  })
})

module.exports = router