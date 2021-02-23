const TaskModel = require('../models/Task')

class Task {

    static create(title, due, category, important) {
        return new Promise((resolve, reject) => {
            const task = new TaskModel({
                title, due, category, important
            })
            task.save((err) => {
                if (err) reject(err);
                else resolve(task);
            });
        })
    }

    static find(filter, fields) {
        filter = filter || {};
        fields = fields || {};

        return new Promise((resolve, reject) => {
            TaskModel.find(filter, fields).then((tasks) => {
                resolve(tasks)
            }).catch((e) => { reject(e) })
        })
    }


}

module.exports = Task;