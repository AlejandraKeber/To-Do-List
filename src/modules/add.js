import Task from './task.js';

/* Store Tasks */
export default function addTask(task) {
  const parsedArr = JSON.parse(localStorage.getItem('taskArr')) || [];
  const count = parsedArr.length + 1;
  const newTask = new Task(count, task);

  parsedArr.push(newTask);
  localStorage.setItem('taskArr', JSON.stringify(parsedArr));

  const taskfield = document.querySelector('.tasktext');
  taskfield.value = '';
}