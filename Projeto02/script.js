const inputBox = document.getElementById("inputBox");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value ===''){
        alert("Escreva alguma coisa!!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value ='';
    savePag();
}

listContainer.addEventListener("click", function(e){
        if(e.target.tagName === "LI"){
            e.target.classList.toggle("check");
            savePag();
        }
        else if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
            savePag();
        }
}, false);

function savePag(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function mostrarTask(){
    listContainer.innerHTML = localStorage.getItem("data")
}

mostrarTask();
