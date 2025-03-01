const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// Маршруты для задач
router.post('/', taskController.createTask);
router.get('/', taskController.getAllTasks);
router.get('/:id', taskController.getTaskById);
router.put('/:id', taskController.updateTask);
router.delete('/:id', taskController.deleteTask);

module.exports = router;