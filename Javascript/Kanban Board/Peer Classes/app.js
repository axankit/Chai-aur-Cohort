let draggedcard = null;

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
  return element;
}
// eventhough these are functions why we not use() and why these addevent listner are here

function dragStart() {
  this.classList.add("draging");
  draggedcard = this;
  document.body.style.background="red"
}

// why we done this use of this

function dragEnd() {
  this.classList.remove("draging");
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
