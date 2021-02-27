const express = require('express')
const router = express.Router()
const HabitService = require('../services/Habit')

router.get('/', async (req, res) => {
    const habits = await HabitService.find()
    res.json(habits)
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

router.patch('/', (req, res) => {
    let data = req.body;
    const id = req.body.id;
    delete data.id;

    HabitService.update(id, data)
        .then((habit) => {
            res.json(habit)
        }).catch((e) => {
            console.log(e)
            res.json(e)
        })
})

module.exports = router;