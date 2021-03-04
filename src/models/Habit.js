const { Schema, model } = require('mongoose')

const HabitSchema = new Schema({
    title: { type: String, required: true },
    completed: { type: [Date], default: [] },
    completedToday: { type: Boolean, default: false },
    icon: { type: String, default: null },
    streak: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = model('Habit', HabitSchema);