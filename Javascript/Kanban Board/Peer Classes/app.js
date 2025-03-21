let draggedcard = null;
let rightClickedCard = null;

function addTask(columnId) {
  const input = document.getElementById(`${columnId}-input`);

  const taskText = input.value;

  if (taskText === "") {
    return;
  }

  const taskElement = createTaskElement(taskText);

  document.getElementById(`${columnId}-tasks`).appendChild(taskElement);

  input.value = "";
}

function createTaskElement(taskText) {
  const element = document.createElement("div");
  element.textContent = taskText;
  element.classList.add("card");
  element.draggable = true;

  element.addEventListener("dragstart", dragStart);
  element.addEventListener("dragEnd", dragEnd);
  element.addEventListener("contextmenu", function(event){
    event.preventDefault();
    rightClickedCard = this;
    showContextMenu(event.pageX, event.pageY);
  });
  return element;
}
// eventhough these are functions why we not use() and why these addevent listner are here

function dragStart() {
  this.classList.add("dragging");
  draggedcard = this;
}

// why we done this use of this

function dragEnd() {
  this.classList.remove("dragging");
}

const columns = document.querySelectorAll(".column .tasks");

// why we done this of double class

columns.forEach((column) => {
  column.addEventListener("dragover", dragOver);
});

// where does this event in params come from and how.
function dragOver(event) {
  event.preventDefault();
  this.appendChild(draggedcard);
}

// logic of right click edit and delete
const contextMenu = document.querySelector(".context-menu");

function showContextMenu(x, y) {
  contextMenu.style.left = `${x}px`;
  contextMenu.style.top = `${y}px`;
  contextMenu.style.display = "block";
}

document.addEventListener("click", () => {
  contextMenu.style.display = "none";
});

function editTask(){
  if (rightClickedCard !== null){
    const newTaskText=prompt("Edit Task - ", rightClickedCard.textContent)

    if (newTaskText !== ""){
      rightClickedCard.textContent=newTaskText;
    }
  }
}

function deleteTask(){
  if (rightClickedCard !== null){
    rightClickedCard.remove()
  }
}
