import _ from 'lodash'; // eslint-disable-line
import './style.css';
import addTask from './modules/add.js';
import displayTasks from './modules/display.js';
import clearTasks from './modules/clear.js';

const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = Object.fromEntries(new FormData(e.target));
  addTask(input.task);
  displayTasks();
});

const clearBtn = document.querySelector('.clear');

clearBtn.addEventListener('click', (e) => {
  e.preventDefault();
  clearTasks();
  displayTasks();
});

displayTasks();