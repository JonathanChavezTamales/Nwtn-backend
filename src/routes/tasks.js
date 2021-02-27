const express = require('express')
const router = express.Router()
const TaskService = require('../services/Task')


router.get('/', async (req, res) => {

    const _tasks = await TaskService.find()

    // Refactor this, do calculations on mongodb query instead
    let todayMidnight = new Date();
    todayMidnight.setHours(23, 59, 59, 0);

    let satMidnight = new Date();
    satMidnight.setDate(satMidnight.getDate() + 6 - satMidnight.getDay());
    satMidnight.setHours(23, 59, 59, 0);

    const today = _tasks.filter((task) => task.due < todayMidnight)
    const thisweek = _tasks.filter((task) => task.due >= todayMidnight && task.due < satMidnight)
    const someday = _tasks.filter((task) => task.due >= satMidnight)

    res.json({ today, thisweek, someday })
})

router.post('/', async (req, res) => {
    TaskService.create(req.body.title,
        req.body.due,
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

router.patch('/', async (req, res) => {
    let data = req.body;
    const id = req.body.id;
    delete data.id;

    TaskService.update(id, data)
        .then((task) => {
            res.json(task)
        }).catch((e) => {
            console.log(e)
            res.json(e)
        })
})

module.exports = router;