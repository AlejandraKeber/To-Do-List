import addTask from "../modules/2add";
import displayTasks from "../modules/3display";


describe('Add task', () => {
  document.body.innerHTML = '<input type="text" name="task" class="text-field full" placeholder="Add to your list..." required>' + '<ul class="task-list">' + '</ul>';
  test('Should add one element when is called', () => {
    addTask("Hello");
    displayTasks();
    const list = document.querySelectorAll('textarea');
    expect(list).toHaveLength(1);
  });
});

describe('Delete task', () => {
  document.body.innerHTML = '<input type="text" name="task" class="text-field full" placeholder="Add to your list..." required>' +
    '<ul class="task-list">' +
    '<form class="task-form b-bottom box">' +
      '<input name="completed" type="checkbox" ${box} class="checkbox">'
      '<textarea name="description" rows="1" class="task-text full" style="text-decoration:${styling}">${task.description}</textarea>' +
      '<button type="button" class="delete btn">' +
      '<i class="fa-solid fa-trash"></i>' +
      '</button>' +
      '<button type="submit" class="update btn">' +
      '<i class="fa-solid fa-pen"></i>' +
      '</button>' +
      '</form>' +
        '</ul>';
  
  test('Should remove an added task', () => {
    const deleteBtn = document.querySelector('.delete');
    deleteBtn.click();
    const listElement = document.querySelectorAll('textarea');
    expect(listElement).toHaveLength(0);
  });
});



