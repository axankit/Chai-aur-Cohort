// We are selecting the particular element
const todoInput =document.getElementById("screen")

const addbtn=document.getElementById("add-btn")
const clearALL=document.getElementById("clearAll")

const todoItemsContainer=document.getElementById("todo-items-container")


addbtn.addEventListener('click', ()=>{
const value=todoInput.value; // reading the value that is written by user

const li = document.createElement("li") // Creating Li element

li.innerText=value; // we just put the value in li tag.

const delbtn = document.createElement("button") // Creating button element

delbtn.innerText='X'

li.appendChild(delbtn)

delbtn.addEventListener('click', ()=>{
    li.remove()
})

todoItemsContainer.appendChild(li);

todoInput.value=""

clearALL.addEventListener('click', ()=>{
    todoItemsContainer.children[0].remove()
})

})