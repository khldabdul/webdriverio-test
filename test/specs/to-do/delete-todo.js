const ToDoPage = require('../pageobjects/todo.page');

describe('TO DO APP - Delete', () => {
    const titleToDo = 'New Title Task';
    const toDoList = 'New To Do List';
    it('As a user, I want to delete an existing to-do', async () => {
        await ToDoPage.addTaskButton.click();
        await ToDoPage.newTaskTitleField.addValue(titleToDo);
        await ToDoPage.newTaskToDoField.addValue(toDoList);
        await ToDoPage.editTaskDoneButton.click();

        const addedTitle = await ToDoPage.addedToDoTitleList.getText();
        expect(addedTitle).toHaveValue(titleToDo);

        await ToDoPage.addedToDoTitleList.click();
        await ToDoPage.deleteTaskButton.click();
    });
});
