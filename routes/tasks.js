const express = require('express');
const router = express.Router();
const {
    getAll,
    createTask,
    getTask,
    updateTask,
    deleteTask
} = require('../controllers/tasks')


router.route('/').get(getAll).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)



module.exports = router