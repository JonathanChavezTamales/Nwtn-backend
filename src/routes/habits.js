const express = require('express')
const router = express.Router()

const _habits = [
    {
        title: 'Correr',
        icon: 'exercise',
        completed: [new Date(), new Date()],
        created: new Date(),
    },
    {
        title: 'Comer una fruta o verdura',
        icon: 'food',
        completed: [new Date(), new Date()],
        created: new Date(),
    },
]

router.get('/', (req, res) => {
    res.json(_habits)
})

router.post('/', (req, res) => {

})

module.exports = router;