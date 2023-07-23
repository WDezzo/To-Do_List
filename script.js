const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function toggleTaskCompletion(taskItem) {
  taskItem.classList.toggle("completed");
}

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const taskItem = document.createElement("li");
    taskItem.classList.add("list-group-item");
    taskItem.innerHTML = `
      <input type="checkbox" class="form-check-input me-2">
      ${taskText}
      <button class="btn btn-danger btn-sm float-end delete-btn">Delete</button>
    `;
    taskList.appendChild(taskItem);
    taskInput.value = "";

    const deleteBtn = taskItem.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", () => {
      taskList.removeChild(taskItem);
    });

    const checkbox = taskItem.querySelector(".form-check-input");
    checkbox.addEventListener("change", () => {
      toggleTaskCompletion(taskItem);
    });
  }
}

const addTaskBtn = document.getElementById("addTaskBtn");
addTaskBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});
