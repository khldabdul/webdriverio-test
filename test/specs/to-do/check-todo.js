const ToDoPage = require('../../pageobjects/todo.page');

describe('TO DO APP - Check', () => {
    const titleToDo = 'New Title Task';
    const toDoList = 'New To Do List';
    it('As a user, I want to check an existing of to-do', async () => {
        await ToDoPage.addTaskButton.click();
        await ToDoPage.newTaskTitleField.addValue(titleToDo);
        await ToDoPage.newTaskToDoField.addValue(toDoList);
        await ToDoPage.editTaskDoneButton.click();

        const addedTitle = await ToDoPage.addedToDoTitleList.getText();
        expect(addedTitle).toHaveValue(titleToDo);

        await ToDoPage.toDoCheckbox.click();
        await expect(ToDoPage.checkedList).toBeDisplayed();
    });
});
