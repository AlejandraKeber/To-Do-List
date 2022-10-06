import addTask from '../modules/2add';
import displayTasks from '../modules/3display';

describe('Add task', () => {
  document.body.innerHTML = '<input type="text" name="task" class="text-field full" placeholder="Add to your list..." required> <ul class="task-list"> </ul>';
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
