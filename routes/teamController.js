const express = require('express')
const router = express.Router({ mergeParams: true })
const League = require('../models/league')
const Team = require('../models/team')



router.get('/', (req, res, next) => {
  // use homeworkID to find Homework assignment
  League.find().then((listOfTeam) => {
      console.log('it works')
      res.render('team/index', { listOfTeam})
      console.log('it def works')
    })
    .catch((err) => res.send(err))
})

// router.get('/', (req, res, next) => {

//   // Find all Leagues
//   Team.find().then((listOfLeagues) => {
//       console.log(listOfLeagues)
   
//       res.render('league/index', { listOfLeagues: listOfLeagues })
//     })
//     .catch((err) => res.send(err))

// })

// NEW Route
router.get('/new', (req, res) => {
  res.render('team/new', {
    leagueId: req.params.leagueId
  })
})

// CREATE Route
router.post('/', (req, res) => {

  // make comment req.body
  const team = new Team(req.body)

  // get homework assignment by the id
  League.findById(req.params.leagueId)
    .then((showLeague) => {

      // push new comment to comments
      showLeague.teams.push(team)

      // save the homework assignment
      return showLeague.save()
    })
    .then(() => {

      // redirect to comments
      res.redirect(`/League/${req.params.leagueId}/team`)
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