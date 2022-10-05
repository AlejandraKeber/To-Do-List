const addItem = require('../3display');

test('Add one new item to the list', () => {
    document.body.innerHTML =
        '<ul class="task-list">' +
        '</ul>';
    addItem();
    const list = document.querySelectorAll('.task-list');
    expect(list).toHaveLength(1);
});