const Task = require('../models/taskModel');

exports.getAllTasks = (req, res) => {
  Task.getAllTasks((err, tasks) => {
    if (err) {
      res.status(500).send('Erro interno do servidor');
      return;
    }
    res.render('tasks', { tasks });
  });
};

exports.getTaskById = (req, res) => {
  const taskId = req.params.id;
  Task.getTaskById(taskId, (err, task) => {
    if (err) {
      res.status(500).send('Erro interno do servidor');
      return;
    }
    res.render('task', { task });
  });
};

exports.addTask = (req, res) => {
    const newTask = {
      title: req.body.titulo,
      description: req.body.descricao
    };
  
    Task.addTask(newTask, (err, result) => {
        console.log(newTask)
      if (err) {
        res.status(500).send('Erro interno do servidor');
        return;
      }
      res.redirect('/api/tasks');
    });
  };

exports.updateTask = (req, res) => {
  const taskId = req.params.id;
  const updatedTask = req.body;
  Task.updateTask(taskId, updatedTask, (err) => {
    if (err) {
      res.status(500).send('Erro interno do servidor');
      return;
    }
    res.redirect('/api/tasks');
  });
};

exports.renderDeleteTaskPage = (req, res) => {
    const taskId = req.params.id;
    Task.getTaskById(taskId, (err, task) => {
      if (err) {
        res.status(500).send('Erro interno do servidor');
        return;
      }
      res.render('deleteTask', { task });
    });
  };

  exports.deleteTask = (req, res) => {
    const taskId = req.params.id;
    Task.deleteTask(taskId, (err) => {
      if (err) {
        res.status(500).send('Erro interno do servidor');
        return;
      }
      res.redirect('/api/tasks');
    });
  };
  
exports.renderAddTaskPage = (req, res) => {
    res.render('addTask');
  };
