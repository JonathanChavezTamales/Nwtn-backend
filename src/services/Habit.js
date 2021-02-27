const HabitModel = require('../models/Habit')

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
        console.log(data)
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


}

module.exports = Habit;