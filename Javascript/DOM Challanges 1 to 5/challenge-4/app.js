/**
 * Write your challenge solution here
 */

const taskInput = document.getElementById("taskInput");

const addbtn = document.getElementById("addButton");

const taskList = document.getElementById("taskList");

const totalTasks = document.getElementById("totalTasks");

const completedTasks = document.getElementById("completedTasks");


addbtn.addEventListener("click", () => {

    const li=document.createElement("li")
    li.innerText=taskInput.value
    taskList.appendChild(li)

    const delbtn=document.createElement("button")
    delbtn.innerText="delete"
    li.appendChild(delbtn)



    delbtn.addEventListener("click",()=>{
    taskList.remove(li)

    
    // for empty the inputfield
    taskInput.value=""
})


})


