const express = require('express')
const router = express.Router()
const gen = require('random-seed')
const moment = require('moment')

// TODO: Move quotes out of memory
quotes = [{ quote: 'Try not to become a man of success, but rather try to become a man of value.', author: 'A. Einstein' },
{ quote: 'Discipline is choosing between what you want now and what you want most.', author: 'A. Lincoln' },
{ quote: 'Drop by drop is the water pot filled.', author: 'Buddha' },
{ quote: 'Your net worth to the world is usually determined by what remains after your bad habits are subtracted from your good ones.', author: 'B. Franklin' }, { quote: 'The risk of a wrong decision is preferable to the terror of indecision.', author: 'Maimonides' }]

router.get('/', async (req, res) => {
    const random = await gen.create(`${moment().dayOfYear()}`)(quotes.length);
    res.json(quotes[random])
})

module.exports = router;