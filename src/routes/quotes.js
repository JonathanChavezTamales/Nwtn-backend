const express = require('express')
const router = express.Router()
const gen = require('random-seed')
const moment = require('moment')

// TODO: Move quotes out of memory
quotes = [
    { quote: 'Strive not to be a success, but rather to be of value.', author: 'Albert Einstein' },
    { quote: 'Discipline is choosing between what you want now and what you want most.', author: 'A. Lincoln' },
    { quote: 'Drop by drop is the water pot filled.', author: 'Buddha' },
    { quote: 'Your net worth to the world is usually determined by what remains after your bad habits are subtracted from your good ones.', author: 'B. Franklin' }, { quote: 'The risk of a wrong decision is preferable to the terror of indecision.', author: 'Maimonides' },
    { quote: 'Productivity is being able to do things that you were never able to do before.', author: 'Franz Kafka' },
    { quote: 'It’s not always that we need to do more but rather that we need to focus on less.' },
    { quote: 'Sometimes, things may not go your way, but the effort should be there every single night.', author: 'Michael Jordan' },
    { quote: 'If you spend too much time thinking about a thing, you’ll never get it done.', author: 'Bruce Lee' },
    { quote: 'The way to get started is to quit talking and begin doing.', author: 'Walt Disney' },
    { quote: 'It’s not that I’m so smart, it’s just that I stay with problems longer.', author: 'Albert Einstein' },
    { quote: 'Action is the foundational key to all success.', author: 'Pablo Picasso' },
    { quote: 'Sanity and happiness are an impossible combination.', author: 'Mark Twain' },
    { quote: 'Think of all the beauty still left around you and be happy.', author: 'Anne Frank' },
    { quote: 'A calm and modest life brings more happiness than the pursuit of success combined with constant restlessness.', author: 'Albert Einstein' },
    { quote: 'Happiness consists more in small conveniences or pleasures that occur every day, than in great pieces of good fortune that happen but seldom to a man in the course of his life.', author: 'Benjamin Franklin' },
    { quote: 'Do not set aside your happiness. Do not wait to be happy in the future. The best time to be happy is always now.', author: 'Roy T. Bennett' },
    { quote: 'An early-morning walk is a blessing for the whole day.', author: 'Henry David Thoreau' },
]

router.get('/', async (req, res) => {
    const random = await gen.create(`${moment().dayOfYear()}`)(quotes.length);
    res.json(quotes[random])
})

module.exports = router;