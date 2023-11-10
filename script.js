document.addEventListener('DOMContentLoaded', function() {
    
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    const taskList = document.getElementById('tasks');
    const newTaskInput = document.getElementById('new-task');
    const addTaskButton = document.getElementById('add-task');

    
    function displayTasks() {
        taskList.innerHTML = '';
        tasks.forEach((task, index) => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <span>${task}</span>
                <button class="edit" data-index="${index}">Edit</button>
                <button class="delete" data-index="${index}">Delete</button>
            `;
            taskList.appendChild(listItem);
        });
    }

    
    addTaskButton.addEventListener('click', function() {
        const newTask = newTaskInput.value.trim();
        if (newTask) {
            tasks.push(newTask);
            newTaskInput.value = '';
            localStorage.setItem('tasks', JSON.stringify(tasks));
            displayTasks();
        }
    });

    
    taskList.addEventListener('click', function(event) {
        if (event.target.classList.contains('edit')) {
            const index = event.target.getAttribute('data-index');
            const editedTask = prompt('Edit task:', tasks[index]);
            if (editedTask !== null) {
                tasks[index] = editedTask;
                localStorage.setItem('tasks', JSON.stringify(tasks));
                displayTasks();
            }
        } else if (event.target.classList.contains('delete')) {
            const index = event.target.getAttribute('data-index');
            tasks.splice(index, 1);
            localStorage.setItem('tasks', JSON.stringify(tasks));
            displayTasks();
        }
    });

    
    displayTasks();
});
document.addEventListener('DOMContentLoaded', function() {
    
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    const taskList = document.getElementById('tasks');
    const newTaskInput = document.getElementById('new-task');
    const addTaskButton = document.getElementById('add-task');

    
    function displayTasks() {
        taskList.innerHTML = '';
        tasks.forEach((task, index) => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <span>${task}</span>
                <button class="edit" data-index="${index}">Edit</button>
                <button class="delete" data-index="${index}">Delete</button>
            `;
            taskList.appendChild(listItem);
        });
    }

    
    addTaskButton.addEventListener('click', function() {
        const newTask = newTaskInput.value.trim();
        if (newTask) {
            tasks.push(newTask);
            newTaskInput.value = '';
            localStorage.setItem('tasks', JSON.stringify(tasks));
            displayTasks();
        }
    });

    
    taskList.addEventListener('click', function(event) {
        if (event.target.classList.contains('edit')) {
            const index = event.target.getAttribute('data-index');
            const editedTask = prompt('Edit task:', tasks[index]);
            if (editedTask !== null) {
                tasks[index] = editedTask;
                localStorage.setItem('tasks', JSON.stringify(tasks));
                displayTasks();
            }
        } else if (event.target.classList.contains('delete')) {
            const index = event.target.getAttribute('data-index');
            tasks.splice(index, 1);
            localStorage.setItem('tasks', JSON.stringify(tasks));
            displayTasks();
        }
    });

    
    displayTasks();
});
