const Tasks = require('../models/task')

const getAll = async (req, res) => {
    try {
        const tasks = await Tasks.find({})
        res.status(201).json({ tasks })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}
const createTask = async (req, res) => {
    try {
        const task = await Tasks.create(req.body)
        res.status(201).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}
const getTask = async (req, res) => {
    try {
        const { id: taskId } = req.params
        const task = await Tasks.findOne({ _id: taskId })
        if (!task)
            return res.status(404).json({ msg: `No task with id: ${taskId}` })
        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })

    }
}
const deleteTask = async (req, res) => {
    try {
        const { id: taskId } = req.params
        const task = await Tasks.findOneAndDelete({ _id: taskId })
        if (!task)
            return res.status(404).json({ msg: `No task with id: ${taskId}` })
        res.status(200).json({ task })

    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

const updateTask = async (req, res) => {
    try {
        const { id: taskId } = req.params
        const task = await Tasks.findOneAndUpdate({_id:taskId}, req.body, {
            runValidators: true,
            new: true
        })
        if (!task)
            return res.status(404).json({ msg: `No task with id: ${taskId}` })
        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

module.exports = {
    getAll,
    createTask,
    getTask,
    updateTask,
    deleteTask,
}