document.getElementById('task-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const taskText = this.value.trim();
        if (taskText) {
            addTask(taskText);
            this.value = ''; // clear input
        }
    }
});

function addTask(text) {
    const taskList = document.getElementById('task-list');

    const li = document.createElement('li');
    li.classList.add('task');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox');
    checkbox.addEventListener('change', function () {
        li.classList.toggle('complete');
        this.style.display = 'none'; // hide checkbox after task is complete
    });

    const taskText = document.createElement('span');
    taskText.textContent = text;

    const deleteBtn = document.createElement('span');
    deleteBtn.textContent = '✖';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function () {
        if (confirm('Are you sure to delete this task?')) {
            taskList.removeChild(li);
        }
    });

    li.appendChild(checkbox);
    li.appendChild(taskText);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
}