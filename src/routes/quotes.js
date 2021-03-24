const express = require('express')
const router = express.Router()
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
    { quote: "Your time is limited, so don't waste it living someone else's life.", author: 'Steve Jobs' },
    { quote: "If today were the last day of my life, would I want to do what I'm about to do today?", author: 'Steve Jobs' },
    { quote: "The purpose of life is to live it, to taste experience to the utmost, to reach out eagerly and without fear for newer and richer experience.", author: "Eleanor Roosevelt" },
    { quote: "There is no other life but this.", author: "Henry David Thoreau" },
    { quote: "Life is a journey, not a destination.", author: "Ralph Waldo Emerson" },
    { quote: "Real generosity towards the future lies in giving all to the present.", author: "Albert Camus" },
    { quote: "If you are depressed, you are living in the past, if you are anxious, you are living in the future, if you are at peace, you are living in the present.", author: "Lao Tzu" },
    { quote: "He who is not courageous enough to take risks will accomplish nothing in life.", author: "Muhammad Ali" },
    { quote: "If you take no risks, you will suffer no defeats. But if you take no risks, you win no victories.", author: "Richard Nixon" },
    { quote: "Never was anything great achieved without danger.", author: "Niccolo Machiavelli" },
    { quote: "Fortune sides with him who dares.", author: "Virgil" },
    { quote: "He who knows, does not speak. He who speaks, does not know.", author: "Lao Tzu" },
    {quote:"If anything is worth doing, do it with all your heart.", author:"Buddha"},
    {quote:"Be where you are; otherwise you will miss your life.", author:"Buddha"},
    {quote:"It is better to rtavel well than to arrive.", author:"Buddha"},
    {quote:"The path is made by walking", author:"African proverb"},
    {quote:"The most difficult thing is the decision to act, the rest is merely tenacity.", author:"Amelia Earhart"},
    {quote:"No act of kindness, no matter how small, is ever wasted.", author:"Aesop"},
    {quote:"Let no one ever come to you without leaving happier.", author:"Mother Theresa"},
    {quote:"Life's most persistent and urgent question is 'What are you doing for others'?", author:"Martin Luther King Jr."},
    {quote:"Go confidently in the direction of your dreams. Live the life you have imagined." , author:"Henry David Thoreau"},
    

]

router.get('/', async (req, res) => {
    const random = moment().dayOfYear() % quotes.length;
    res.json(quotes[random])
})

module.exports = router;