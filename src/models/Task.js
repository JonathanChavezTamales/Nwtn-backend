const { Schema, model } = require('mongoose')

const TaskSchema = new Schema({
    title: { type: String, required: true },
    due: { type: Date, default: (new Date()).setHours(23, 59, 59, 0) }, // Today midnight
    details: { type: String, default: '' },
    important: { type: Boolean, default: false },
    completed: { type: Boolean, default: false },
    category: { type: String, default: null }
}, { timestamps: true });

module.exports = model('Task', TaskSchema);