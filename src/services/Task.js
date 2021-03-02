const TaskModel = require('../models/Task')

class Task {

    static create(title, due, details, category, important) {
        return new Promise((resolve, reject) => {
            console.log(due)
            console.log(new Date())
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
        console.log(id)
        console.log(data)
        return new Promise((resolve, reject) => {
            TaskModel.findByIdAndUpdate(id, data, { new: true })
                .then((task) => {
                    console.log(task)
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
            TaskModel.find(filter, fields).then((tasks) => {
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