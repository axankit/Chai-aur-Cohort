const taskContainer = document.querySelector('.task-container');
const addTaskBtn = document.querySelector('.add-task-btn');
const boards = document.querySelectorAll('.board');
const task = document.querySelectorAll('.task');



addTaskBtn.addEventListener('click', function() {
    let value = prompt('Your Task')
    const p = document.createElement('p')
    p.setAttribute('draggable', true)
    p.classList.add('task');
    p.innerText = value;
    taskContainer.appendChild(p)
})


task.addEventListener("drag", ()=>{
    document.body.style.background="red"
})
