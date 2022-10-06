import addTask from '../modules/2add';
import displayTasks from '../modules/3display';
import clearTasks from '../modules/4clear';

document.body.innerHTML = '<input type="text" name="task" class="text-field full" placeholder="Add to your list..." required> <ul class="task-list"> </ul> <div class="box clr-all">Clear all completed</div>';

describe('Add task', () => {
  test('Should add one element when is called', () => {
    addTask('Hello');
    displayTasks();
    const list = document.querySelectorAll('textarea');
    expect(list).toHaveLength(1);
  });
});

describe('Delete task', () => {
  test('Should remove an added task', () => {
    const deleteBtn = document.querySelector('.delete');
    deleteBtn.click();
    const listElement = document.querySelectorAll('textarea');
    expect(listElement).toHaveLength(0);
  });
});

describe('Edit task', () => {

  test('Should edit text when clicked', () => {
    addTask('Hello');
    displayTasks();
    const taskItem = document.querySelector('li');
    const taskForm = taskItem.querySelector('textarea');
    taskForm.click(e => {
      new FormData(e.target = 'helooooooo');
    });
    const locStorage = localStorage.getItem('taskArr');

    displayTasks();
    expect(locStorage).toEqual(JSON.stringify([{
      index: 1,
      description: 'Hello',
      completed: false,
    }]));
  })

});

describe('Checkbox', () => {
  test('Expect to change completed to tru after click', () => {
    const checkBox = document.querySelector('.checkbox');
    checkBox.click();
    const locStorage = localStorage.getItem('taskArr');

    expect(locStorage).toEqual(JSON.stringify([{
      index: 1,
      description: 'Hello',
      completed: true,
    }]));
  })
});

describe('Clear all completed', () => {
  test('Should delete all the tasks marked as completed', () => {
    const list = document.querySelectorAll('textarea');
    addTask('Wooooorld');
    clearTasks();
    displayTasks();
    expect(list).toHaveLength(1);
  })
})

