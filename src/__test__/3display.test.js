import addTask from "../modules/2add";
import displayTasks from "../modules/3display";

test('Add one new item to the list', () => {
    document.body.innerHTML = '<input type="text" name="task" class="text-field full" placeholder="Add to your list..." required>' + '<ul class="task-list">' + '</ul>'
    /* addTask("Hello"); */
    displayTasks();
    const list = document.querySelectorAll('.task-list');
    expect(list).toHaveLength(2);
});
