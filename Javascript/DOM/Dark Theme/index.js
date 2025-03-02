function themechange(color){
    document.body.style.background = color; 
}


const togglebtn = document.getElementById("themechanger")

togglebtn.addEventListener("click", function(){

const currentcolor=document.body.style.backgroundColor;

    if(!currentcolor || currentcolor=="white"){
        themechange("black")
        togglebtn.innerText="Light Mode"
        } else{
            themechange("white")
            togglebtn.innerText="Light Mode"
        }

})




