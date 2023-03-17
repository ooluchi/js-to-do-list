/*
 * Copyright (c) 2023 Your Company Name
 * All rights reserved.
 */
const newTask = document.querySelector("#add-task");
const tasksDiv = document.querySelector("#tasks");

let removeTasks, editTasks, tasks;
let updateList=""
let count=""


window.onload =  () => {
    updateList="";
    count= Objects.keys(localStorage).length;
    displayTasks();
    
}


// function to display tasks
const displayTasks = () => {
    if (Object.keys(localStorage).length > 0) {
        tasksDiv.style.display = "inline-block";
    }
    }else {
        taskDiv.style.display= "none";
    }
    tasksDiv.innerHTML = ""

    let task = Object.keys(localStorage);
    tasks = tasks.sort();

    for(let key of tasks){
        let ClassValue= ""

        let value = localStorage.getItem(key);
        let taskInnerDiv = document.createElement("div");
        taskInnerDiv.classList.add("task");
        taskInnerDiv.setAttribute("id", key);
        taskInnerDiv.innerHTML = `<span id="taskname`
    }
};

// function to remove an item from the list
function removeItem(item) {
  list.removeChild(item);
}

// function to edit an item in the list
function editItem(item) {
  const text = item.firstChild.nodeValue;
  const newText = prompt("Enter new text:", text);
  if (newText !== null && newText.trim() !== "") { // prevent empty values
    item.firstChild.nodeValue = newText;
  }
}
