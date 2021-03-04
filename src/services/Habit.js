const HabitModel = require('../models/Habit')
const moment = require('moment')
class Habit {

    static create(title, icon) {
        return new Promise((resolve, reject) => {
            const habit = new HabitModel({
                title, icon
            })
            habit.save((err) => {
                if (err) reject(err);
                else resolve(habit);
            });
        })
    }

    static update(id, data) {
        return new Promise((resolve, reject) => {
            HabitModel.findByIdAndUpdate(id, data, { new: true })
                .then((habit) => {
                    resolve(habit)
                }).catch((err) => {
                    reject(err)
                })
        })
    }

    static find(filter, fields) {
        filter = filter || {};
        fields = fields || {};

        return new Promise((resolve, reject) => {
            HabitModel.find(filter, fields).then((habits) => {
                resolve(habits)
            }).catch((e) => { reject(e) })
        })
    }

    static delete(id) {
        return new Promise((resolve, reject) => {
            HabitModel.findByIdAndDelete(id).then((x) => {
                resolve(x)
            }).catch((e) => {
                reject(e)
            })
        })
    }
}

module.exports = Habit;