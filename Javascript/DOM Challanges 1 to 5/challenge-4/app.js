/**
 * Write your challenge solution here
 */

const taskInput = document.getElementById("taskInput");
const addbtn = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");

let count = 0;
let completedTasksCount = 0;

function taskManagement() {
  count++;
  const userInput = taskInput.value;

  //   New element code
  const li = document.createElement("li");
  li.innerText = userInput;
  li.classList.add("task-text");
  taskList.appendChild(li);

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.classList.add("complete-checkbox");
  li.appendChild(checkbox);

  checkbox.addEventListener("click", () => {
    li.style.textDecoration = "line-through";
    li.style.color = "grey";
    completedTasksCount++;
    completeCountUpdate(completedTasksCount);
  });

  //   Delete Button code
  const delbtn = document.createElement("button");
  delbtn.innerText = "delete";
  delbtn.classList.add("delete-button");
  li.appendChild(delbtn);

  delbtn.addEventListener("click", () => {
    li.remove();

    count--;
    countUpdate(count);

    completedTasksCount--;
    completeCountUpdate(completedTasksCount);
  });

  // for empty the inputfield
  taskInput.value = "";

  console.log("Before", count);

  totalTasks.innerText = `Total tasks: ${count}`;
  completedTasks.innerText = `Completed: ${completedTasksCount}`;

  console.log("After", count);
}

function countUpdate(count) {
  totalTasks.innerText = `Total tasks: ${count}`;
}

function completeCountUpdate(count) {
  completedTasks.innerText = `Completed: ${count}`;
}

addbtn.addEventListener("click", () => {
  taskManagement();
});
