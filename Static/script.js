const form = document.getElementById('add-task-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const taskInput = document.querySelector('input[name="task_description"]');
    const taskDescription = taskInput.value;

    fetch('/add_task', {
        method: 'POST',
        body: new URLSearchParams({
            'task_description': taskDescription
        })
    })
    .then(response => response.json())
    .then(tasks => {
        const tasksList = document.getElementById('tasks-list');

        tasksList.innerHTML = '';

        tasks.forEach(task => {
            const taskElement = document.createElement('li');
            taskElement.className = 'task';
            taskElement.textContent = task;
            tasksList.appendChild(taskElement);
        });
    });

    taskInput.value = '';
});

fetch('/tasks')
.then(response => response.json())
.then(tasks => {
    const tasksList = document.getElementById('tasks-list')
    
    tasksList.innerHTML = '';

    tasks.forEach(task => {
        const taskElement = document.createElement('li');
        taskElement.className = 'task';
        taskElement.textContent = task;
        tasksList.appendChild(taskElement);
    });
});
