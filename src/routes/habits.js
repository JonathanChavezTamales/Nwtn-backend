const express = require('express')
const router = express.Router()
const moment = require('moment')
const HabitService = require('../services/Habit')

router.get('/', async (req, res) => {
    const habits = await HabitService.find()
    res.json(habits)
})

router.get('/:id', async (req, res) => {
    const habit = await HabitService.find({ _id: req.params.id })
    res.json(habit[0])
})

router.post('/', (req, res) => {
    HabitService.create(req.body.title,
        req.body.icon)
        .then((habit) => {
            console.log('Habit created');
            res.json(habit)
        }).catch((e) => {
            console.log(e)
            res.json(e)
        })
})

router.patch('/:id', (req, res) => {
    let data = req.body;
    const id = req.params.id;
    delete data.id

    console.log('PATCH HABIT')

    HabitService.update(id, data)
        .then((habit) => {
            res.json(habit)
        }).catch((e) => {
            console.log(e)
            res.json(e)
        })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;

    HabitService.delete(id)
        .then((habit) => {
            res.send(200)
            console.log('habit deleted')
        }).catch((e) => {
            console.log(e)
            res.json(e)
        })
})

router.get('/:id/markcompleted', async (req, res) => {
    const id = req.params.id;

    HabitService.markCompleteToday(id)
        .then((habit) => {
            res.json(habit)
        }).catch((e) => {
            console.log(e)
            res.json(e)
        })
})

module.exports = router;