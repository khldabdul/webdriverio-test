const ToDoPage = require('../../pageobjects/todo.page');

describe('TO DO APP - Create', () => {
    const titleToDo = 'New Title Task';
    const toDoList = 'New To Do List';
    it('As a user, I want to create a new to-do', async () => {
        await ToDoPage.addTaskButton.click();
        await ToDoPage.newTaskTitleField.addValue(titleToDo);
        await ToDoPage.newTaskToDoField.addValue(toDoList);
        await ToDoPage.editTaskDoneButton.click();

        const addedTitle = await ToDoPage.addedToDoTitleList.getText();
        expect(addedTitle).toHaveValue(titleToDo);
    });
});
