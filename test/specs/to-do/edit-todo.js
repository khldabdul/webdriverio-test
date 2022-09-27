const ToDoPage = require('../../pageobjects/todo.page');

describe('TO DO APP - Edit', () => {
    const titleToDo = 'New Title Task';
    const toDoList = 'New To Do List';
    it('As a user, I want to edit an existing to-do', async () => {
        await ToDoPage.addTaskButton.click();
        await ToDoPage.newTaskTitleField.addValue(titleToDo);
        await ToDoPage.newTaskToDoField.addValue(toDoList);
        await ToDoPage.editTaskDoneButton.click();

        const addedTitleElement = await ToDoPage.addedToDoTitleList.getText();
        expect(addedTitleElement).toHaveValue(titleToDo);


        const editedTitle = titleToDo+' edited';

        await ToDoPage.addedToDoTitleList.click();
        await ToDoPage.editTaskButton.click();
        await ToDoPage.newTaskTitleField.addValue(editedTitle);
        await ToDoPage.newTaskToDoField.addValue(toDoList+' edited');
        await ToDoPage.editTaskDoneButton.click();

        const editedTitleElement = await ToDoPage.addedToDoTitleList.getText();
        expect(editedTitleElement).toHaveValue(editedTitle);
    });
});
