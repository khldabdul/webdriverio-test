const ToDoPage = require('../../pageobjects/todo.page');

describe('TO DO APP - View', () => {
    const titleToDo = 'New Title Task';
    const toDoList = 'New To Do List';
    it('As a user, I want to see my list of to-do', async () => {
        await ToDoPage.addTaskButton.click();
        await ToDoPage.newTaskTitleField.addValue(titleToDo);
        await ToDoPage.newTaskToDoField.addValue(toDoList);
        await ToDoPage.editTaskDoneButton.click();

        const addedTitle = await ToDoPage.addedToDoTitleList.getText();
        expect(addedTitle).toHaveValue(titleToDo);

        await ToDoPage.addedToDoTitleList.click();
        const detailTitle = await ToDoPage.taskDetailTitle.getText();
        const detailDescription = await ToDoPage.taskDetailDescription.getText();

        expect(detailTitle).toEqual(titleToDo);
        expect(detailDescription).toEqual(toDoList);

        await ToDoPage.navigateUpButton.click();
    });
});
