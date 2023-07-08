const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');
const noTasksMessage = document.getElementById('noTasksMessage');

let tasks = [];

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const task = {
      id: Date.now(),
      text: taskText,
      completed: false
    };

    tasks.push(task);

    renderTasks();

    taskInput.value = '';
    noTasksMessage.style.display = 'none';
  }
}

function toggleTaskCompleted(taskId) {
  tasks = tasks.map(task => {
    if (task.id === taskId) {
      return {
        ...task,
        completed: !task.completed
      };
    }
    return task;
  });

  renderTasks();
}

function deleteTask(taskId) {
  tasks = tasks.filter(task => task.id !== taskId);

  renderTasks();
}

function renderTasks() {
  taskList.innerHTML = '';

  tasks.forEach(task => {
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', () => toggleTaskCompleted(task.id));

    const taskText = document.createElement('span');
    taskText.classList.add('task-text');
    taskText.textContent = task.text;
    if (task.completed) {
      taskText.classList.add('completed');
    }

    const deleteButton = document.createElement('span');
    deleteButton.classList.add('delete-button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.addEventListener('click', () => deleteTask(task.id));

    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskText);
    taskItem.appendChild(deleteButton);

    taskList.appendChild(taskItem);
  });

  if (tasks.length === 0) {
    noTasksMessage.style.display = 'block';
  } else {
    noTasksMessage.style.display = 'none';
  }
}

addTaskButton.addEventListener('click', addTask);

