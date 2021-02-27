const { Schema, model } = require('mongoose')

const HabitSchema = new Schema({
    title: { type: String, required: true },
    completed: { type: [Date], default: [] },
    completedToday: { type: Boolean, default: false },
    icon: { type: String, default: null }
}, { timestamps: true });

module.exports = model('Habit', HabitSchema);