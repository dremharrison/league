const express = require('express')
const router = express.Router()
const Homework = require('../models/League')

/* GET homework listing. */
// localhost/homework
router.get('/', (req, res, next) => {

  // Find all Homeworks
  League.find()
    .then((listOfLeagues) => {

      // Once you have all homework, then render out index page homeworks is all
      // pieces of data that match the Homework Model
      res.render('league/index', { listOfLeagues: listOfLeagues })
    })
    .catch((err) => res.send(err))

})

// NEW Route
router.get('/new', (req, res) => {
  res.render('league/new')
})

// CREATE Route
router.post('/', (req, res) => {
  const newLeague = req.body
  League.create(createLeague)
    .then(() => {
      res.redirect('/league')
    })
})

// SHOW Route
router.get('/:id', (req, res) => {
  League.findById(req.params.id)
    .then((showLeague) => {
      res.render('league/show', { showLeague })
    })
})

// EDIT Route
router.get('/:id/edit', (req, res) => {
  League.findById(req.params.id)
    .then((editLeague) => {
      res.render('league/edit', { showLeague: editLeague })
    })
})

// UPDATE Route
router.put('/:id', (req, res) => {
  League.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(() => {
    res.redirect(`/league/${req.params.id}`)
  })
})

// DELETE Route
router.delete('/:id', (req, res) => {
  League.findByIdAndRemove(req.params.id)
    .then(() => {
      console.log('Successfully Delete ')
      res.redirect('/league')
    })
})

module.exports = router