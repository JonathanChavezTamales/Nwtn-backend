const { Schema, model } = require('mongoose')
const moment = require('moment')

const TaskSchema = new Schema({
    title: { type: String, required: true },
    due: { type: Date, default: new Date('9999') }, // Far away in the future
    details: { type: String, default: '' },
    important: { type: Boolean, default: false },
    completed: { type: Date, default: null },
    category: { type: String, default: null }
}, { timestamps: true });

module.exports = model('Task', TaskSchema);