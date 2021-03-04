const cron = require('node-cron')
const HabitModel = require('../models/Habit')
const moment = require('moment')

cron.schedule('00 00 * * *', async function () {
    console.log('--RESET STREAK--');
    // Not completed during the day will reset streak
    await HabitModel.updateMany({ completedToday: false }, { streak: 0 })
    // Completed during day will increase streak and add the date of completion to history
    await HabitModel.updateMany({ completedToday: true },
        {
            $inc: { streak: 1 },
            $push: { completed: moment().endOf('day') }
        }
    )

    // Reset completed field to false at beginning of the day
    await HabitModel.updateMany({}, { completedToday: false });
}, { timezone: 'America/Mexico_City' });