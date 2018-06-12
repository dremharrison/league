const express = require('express')
const router = express.Router({ mergeParams: true })
const League = require('../models/league')
const Team = require('../models/team')



router.get('/', (req, res, next) => {
  // use homeworkID to find Homework assignment
  League.findById(req.params.leagueId).then((listOfLeagues) => {
      console.log('it works')
      res.render('team/index', { listOfLeagues})
      console.log('it def works')
    })
    .catch((err) => res.send(err))
})

// NEW Route
router.get('/new', (req, res) => {
  res.render('team/new', {
    leagueId: req.params.leagueId
  })
  console.log(req.params.leagueId)
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

    
      res.redirect(`/league/${req.params.leagueId}/team`)
    })
})

// DELETE Route
router.delete('/:id', (req, res) => {

})

module.exports = router


// __________________________________________________________________________________________________________



// // NEW Route
// router.get('/new', (req, res) => {
//   res.render('league/new')
// })

// // CREATE Route
// router.post('/', (req, res) => {
//   console.log('inside post route')
//   const createLeague = req.body
//   console.log(createLeague)
//   League.create(createLeague)
//     .then(() => {
//       res.redirect('/league')
//     })
// })

// // SHOW Route
// router.get('/:id', (req, res) => {
//   League.findById(req.params.id)
//     .then((showLeague) => {
//       res.render('league/show', { showLeague })
//     })
// })

// // EDIT Route
// router.get('/:id/edit', (req, res) => {
//   League.findById(req.params.id)
//     .then((editLeague) => {
//       res.render('league/edit', { showLeague: editLeague })
//     })
// })

// // UPDATE Route
// router.put('/:id', (req, res) => {
//   League.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(() => {
//     res.redirect(`/league/${req.params.id}`)
//   })
// })

// // DELETE Route
// router.delete('/:id', (req, res) => {
//   League.findByIdAndRemove(req.params.id)
//     .then(() => {
//       console.log('Delete ')
//       res.redirect('/league')
//     })
// })

// module.exports = router