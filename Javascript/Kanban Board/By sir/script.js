const addTaskBtn = document.getElementById("add-task-btn");

const todoBord = document.getElementById("todo-board");

function attachDragEvents(target) {
  target.addEventListener("dragstart", () => {
    target.classList.add("flying");
  });
  target.addEventListener("dragend", () => {
    target.classList.remove("flying");
  });
}

addTaskBtn.addEventListener("click", () => {
  const input = prompt("what is the task");

  if (!input) return; // why this line of code and impact of this line of code.

  const taskCard = document.createElement("p");
  taskCard.classList.add("item");
  taskCard.setAttribute("draggable", true);
  taskCard.innerText = input;

  attachDragEvents(taskCard);

  todoBord.appendChild(taskCard);
});

const allBoard = document.querySelectorAll(".board");
const allItems = document.querySelectorAll(".item");

allItems.forEach((items) => attachDragEvents(items));
// allItems.forEach(attachDragEvents);


allBoard.forEach((board) => {
  board.addEventListener("dragover", () => {
    const flying = document.querySelector(".flying"); // what is the diff here when we use querySelectorAll and querySelector
    board.appendChild(flying);
    // console.log(board,"kuch toh garbad hai daya",flying)
  });
});
