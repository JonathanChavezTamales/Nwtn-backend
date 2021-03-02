const express = require('express')
const router = express.Router()
const TaskService = require('../services/Task')
const moment = require('moment')


router.get('/', async (req, res) => {


    const tasks = await TaskService.find()

    // Refactor this, do calculations on mongodb query instead
    let todayMidnight = moment().endOf('day')
    let satMidnight = moment().endOf('week')

    const expired = await TaskService.find({ due: { $lt: todayMidnight } })
    const today = await TaskService.find({ due: todayMidnight })
    const thisweek = await TaskService.find({ $and: [{ due: { $gt: todayMidnight, $lt: satMidnight } }] })
    const someday = await TaskService.find({ due: { $gte: satMidnight } })

    res.json({ expired, today, thisweek, someday })
})

router.get('/:id', async (req, res) => {

    const task = await TaskService.find({ _id: req.params.id })
    res.json(task[0])
})

router.post('/', async (req, res) => {
    TaskService.create(req.body.title,
        moment(req.body.due).endOf('day'),
        req.body.details,
        req.body.category,
        req.body.important)
        .then((task) => {
            console.log('Task created');
            res.json(task)
        }).catch((e) => {
            console.log(e)
            res.json(e)
        })
})

router.patch('/:id', async (req, res) => {
    let data = req.body;
    const id = req.params.id;
    delete data.id;

    TaskService.update(id, data)
        .then((task) => {
            res.json(task)
        }).catch((e) => {
            console.log(e)
            res.json(e)
        })
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id;

    TaskService.delete(id)
        .then((task) => {
            res.send(200)
            console.log('deleted successfully')
        }).catch((e) => {
            console.log(e)
            res.json(e)
        })
})

module.exports = router;