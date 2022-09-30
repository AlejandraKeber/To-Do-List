import _ from 'lodash'; // eslint-disable-line
import './style.css';
import addTask from './modules/2add.js';
import displayTasks from './modules/3display.js';
import clearTasks from './modules/4clear.js';

const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = Object.fromEntries(new FormData(e.target));
  addTask(input.task);
  displayTasks();
});

const clearBtn = document.querySelector('.clr-all');

clearBtn.addEventListener('click', (e) => {
  e.preventDefault();
  clearTasks();
  displayTasks();
});

displayTasks();