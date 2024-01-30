const db = require('../db');

class Task {
  getAllTasks(callback) {
    db.query('SELECT * FROM tarefas', callback);
  }

  getTaskById(id, callback) {
    db.query('SELECT * FROM tarefas WHERE id = ?', [id], callback);
  }

  addTask(task, callback) {
    db.query('INSERT INTO tarefas (titulo, descricao) VALUES (?, ?)', [task.title, task.description], callback);
  }

  updateTask(id, task, callback) {
    db.query('UPDATE tarefas SET title = ?, description = ? WHERE id = ?', [task.title, task.description, id], callback);
  }

  deleteTask(id, callback) {
    db.query('DELETE FROM tarefas WHERE id = ?', [id], callback);
  }
}

module.exports = new Task();
