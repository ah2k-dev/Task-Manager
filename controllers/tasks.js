const Tasks = require('../models/task')
const asyncWrapper = require('../middleware/asyncWrapper')
const { createCustomError } = require('../errors/customError')

const getAll = asyncWrapper(async (req, res) => {
    const tasks = await Tasks.find({})
    res.status(201).json({ tasks })
})

const createTask = asyncWrapper(async (req, res) => {
    const task = await Tasks.create(req.body)
    res.status(201).json({ task })
})

const getTask = asyncWrapper(async (req, res) => {
    const { id: taskId } = req.params
    const task = await Tasks.findOne({ _id: taskId })
    if (!task)
        return next(createCustomError(`No task with id: ${taskId}`, 404))
    res.status(200).json({ task })
})

const deleteTask = asyncWrapper(async (req, res) => {
    const { id: taskId } = req.params
    const task = await Tasks.findOneAndDelete({ _id: taskId })
    if (!task)
        return next(createCustomError(`No task with id: ${taskId}`, 404))
    res.status(200).json({ task })
})

const updateTask = asyncWrapper(async (req, res) => {
    const { id: taskId } = req.params
    const task = await Tasks.findOneAndUpdate({ _id: taskId }, req.body, {
        runValidators: true,
        new: true
    })
    if (!task)
        return next(createCustomError(`No task with id: ${taskId}`, 404))
    res.status(200).json({ task })
})

module.exports = {
    getAll,
    createTask,
    getTask,
    updateTask,
    deleteTask,
}