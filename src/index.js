import _ from 'lodash'; // eslint-disable-line
import './style.css';
import addTask from './modules/2add.js';
import displayTasks from './modules/3display.js';

const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = Object.fromEntries(new FormData(e.target));
  addTask(input.task);
  displayTasks();
});

displayTasks();