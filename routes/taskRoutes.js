const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.get('/tasks', taskController.getAllTasks);
router.get('/tasks/:id', taskController.getTaskById);
router.get('/addTask', taskController.renderAddTaskPage);
router.post('/tasks', taskController.addTask);
router.put('/tasks/:id', taskController.updateTask);
router.get('/tasks/:id/delete', taskController.renderDeleteTaskPage);
router.delete('/tasks/:id', taskController.deleteTask);


module.exports = router;


