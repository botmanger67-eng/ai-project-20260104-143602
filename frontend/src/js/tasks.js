// frontend/src/js/tasks.js

const Tasks = {
    initialize: function() {
        this.taskList = document.getElementById('task-list');
        // Example tasks (replace with dynamic loading)
        this.addTask('Task 1', 'pending');
        this.addTask('Task 2', 'in_progress');
        this.addTask('Task 3', 'completed');
    },

    addTask: function(name, status) {
        const taskItem = document.createElement('li');
        taskItem.textContent = `${name} - ${status}`;
        taskItem.dataset.taskId = name.replace(' ', '_').toLowerCase(); // Generate a simple task ID
        taskItem.dataset.status = status;
        this.taskList.appendChild(taskItem);
    },

    updateTaskStatus: function(taskId, status) {
        const taskItem = document.querySelector(`[data-task-id="${taskId}"]`);
        if (taskItem) {
            taskItem.dataset.status = status;
            taskItem.textContent = `${taskId.replace('_', ' ')} - ${status}`;
        }
    }
};
