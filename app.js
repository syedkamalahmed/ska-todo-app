const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

// Array to store tasks
let tasks = [];

// Function to add a task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        tasks.push(taskText);
        renderTasks();
        taskInput.value = "";
    }
}

// Function to render tasks
function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${task}</span>
            <span class="delete" onclick="deleteTask(${index})">&#10006;</span>
        `;
        taskList.appendChild(li);
    });
}

// Function to delete a task
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

// Event listener for adding a task
addTaskButton.addEventListener("click", addTask);
