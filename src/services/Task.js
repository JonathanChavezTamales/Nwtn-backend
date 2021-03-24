const TaskModel = require('../models/Task')

class Task {

    static create(title, due, details, category, important) {
        return new Promise((resolve, reject) => {
            const task = new TaskModel({
                title, due, details, category, important
            })
            task.save((err) => {
                if (err) reject(err);
                else resolve(task);
            });
        })
    }

    static update(id, data) {

        return new Promise((resolve, reject) => {
            TaskModel.findByIdAndUpdate(id, data, { new: true })
                .then((task) => {
                    resolve(task)
                }).catch((err) => {
                    reject(err)
                })
        })
    }

    static find(filter, fields) {
        filter = filter || {};
        fields = fields || {};

        return new Promise((resolve, reject) => {
            TaskModel.find(filter, fields).sort({ important: -1, completed: 'desc', due: 'asc' }).then((tasks) => {
                resolve(tasks)
            }).catch((e) => { reject(e) })
        })
    }

    static delete(id) {
        return new Promise((resolve, reject) => {
            TaskModel.findByIdAndDelete(id).then((x) => {
                resolve(x)
            }).catch((e) => {
                reject(e)
            })
        })
    }

}

module.exports = Task;