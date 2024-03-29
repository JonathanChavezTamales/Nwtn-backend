const express = require('express')
const router = express.Router()
const TaskService = require('../services/Task')
const moment = require('moment-timezone')


router.get('/', async (req, res) => {


    const tasks = await TaskService.find()

    // Refactor this, do calculations on mongodb query instead
    let todayMidnight = moment().endOf('day').tz('America/Mexico_City')
    let sunMidnight = moment().endOf('week').add(1, 'day').tz('America/Mexico_City')

    const today = await TaskService.find({ due: { $lte: todayMidnight }, $or: [{ completed: null }, { completed: { $gte: todayMidnight } }] })
    const thisweek = await TaskService.find({ $and: [{ due: { $gt: todayMidnight, $lte: sunMidnight } }] })
    const someday = await TaskService.find({ due: { $gt: sunMidnight } })

    res.json({ today, thisweek, someday })
})

router.get('/:id', async (req, res) => {
    const task = await TaskService.find({ _id: req.params.id })
    res.json(task[0])
})

router.get('/project/:project', async (req, res) => {
    let endOfweek = moment().endOf('week').add(1, 'day')
    let startOfweek = moment().startOf('week').add(1, 'day')
    const tasks = await TaskService.find({
        category: req.params.project,
        $and: [{ due: { $gte: startOfweek, $lte: endOfweek } }]
    }, { title: 1, completed: 1 }
    )
    res.json(tasks)
})

router.post('/', async (req, res) => {
    console.log(req.body.important)
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

    if (data.due) data.due = moment(data.due).endOf('day')

    console.log('PATCH TASK')
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