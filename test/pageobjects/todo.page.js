class TodoPage {

    get noTaskMain() {
        return $('android.widget.TextView[resource-id="com.example.android.architecture.blueprints.todomvp.mock:id/fab_add_task"]');
    }

    get addTaskButton() {
        return $('[resource-id="com.example.android.architecture.blueprints.todomvp.mock:id/fab_add_task"]');
    }

    get newTaskTitleField() {
        return $('[resource-id="com.example.android.architecture.blueprints.todomvp.mock:id/add_task_title"]');
    }

    get newTaskToDoField() {
        return $('[resource-id="com.example.android.architecture.blueprints.todomvp.mock:id/add_task_description"]');
    }

    get editTaskButton() {
        return $('[resource-id="com.example.android.architecture.blueprints.todomvp.mock:id/fab_edit_task"]');
    }

    get editTaskDoneButton() {
        return $('[resource-id="com.example.android.architecture.blueprints.todomvp.mock:id/fab_edit_task_done"]');
    }

    get addedToDoTitleList() {
        return $('[resource-id="com.example.android.architecture.blueprints.todomvp.mock:id/title"]');
    }

    get toDoCheckbox() {
        return $('[resource-id="com.example.android.architecture.blueprints.todomvp.mock:id/complete"]');
    }

    get checkedList() {
        return $('[checked="true"]');
    }

    get deleteTaskButton() {
        return $('[resource-id="com.example.android.architecture.blueprints.todomvp.mock:id/menu_delete"]');
    }

    get taskDetailTitle() {
        return $('[resource-id="com.example.android.architecture.blueprints.todomvp.mock:id/task_detail_title"]');
    }

    get taskDetailDescription() {
        return $('[resource-id="com.example.android.architecture.blueprints.todomvp.mock:id/task_detail_description"]');
    }

    get navigateUpButton() {
        return $('[content-desc="Navigate up"]');
    }

}

module.exports = new TodoPage();
