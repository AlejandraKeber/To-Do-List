export default function displayTasks() {
  const taskList = document.querySelector('.task-list');
  let parsedArr = JSON.parse(localStorage.getItem('taskArr')) || [];

  taskList.innerHTML = '';
  parsedArr.map((task) => {
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `<form class="task-form b-bottom box">
      <input name="completed" type="checkbox" class="checkbox">
      <textarea name="description" rows="1" class="task-text full">${task.description}</textarea>
      <button type="button" class="delete btn">
      <i class="fa-solid fa-trash"></i>
      </button>
      <button type="submit" class="update btn">
      <i class="fa-solid fa-pen"></i>
      </button>
      </form>`;
    taskList.appendChild(taskItem);
    const deleteBtn = taskItem.querySelector('.delete');
    const updateBtn = taskItem.querySelector('.update');
    const updateText = taskItem.querySelector('.task-text');
    updateBtn.style.display = 'none';
    updateText.addEventListener('click', (e) => {
      e.preventDefault();
      updateBtn.style.display = 'block';
      deleteBtn.style.display = 'none';
      updateText.style.backgroundColor = '#f4f4f4';
    });
    const taskForm = taskItem.querySelector('.task-form');
    taskForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = Object.fromEntries(
        new FormData(e.target),
      );
      task.description = input.description;
      localStorage.setItem('taskArr', JSON.stringify(parsedArr));
      updateBtn.style.display = 'none';
      deleteBtn.style.display = 'block';
      updateText.style.backgroundColor = '#fff';
    });
    deleteBtn.addEventListener('click', (e) => {
      e.preventDefault();
      let temp = parsedArr.filter((item) => item !== task);
      parsedArr = temp;
      temp = parsedArr.map((item) => {
        item.index = parsedArr.indexOf(item) + 1;
        return item;
      });
      parsedArr = temp;
      localStorage.setItem('taskArr', JSON.stringify(parsedArr));
      taskList.removeChild(taskItem);
    });
    return taskList;
  });
}