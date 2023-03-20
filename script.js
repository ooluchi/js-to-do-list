/*
 * Copyright (c) 2023 Your Company Name
 * All rights reserved.
 */
const itemsList = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : 
[]
console.log(itemsList)

document.querySelector("#input").addEventListener("click", () => {
  const item = document.querySelector("#item")
  createItem(item)
})



function displayItems(item) {
  let items = ""
  for(let i = 0 ; i < itemsList.length ; i++) {
    items += ` <div class="item">
    <div class="add-controller">
      <textarea disabled>${itemsList[i]}</textarea>
      <div class="edit-controller">
        <i class="fa-solid fa-trash deleteButton"></i>
        <i class="fa-solid fa-pen-to-square editButton"></i>
      </div>
    </div>
    <div class="update-controller">
    <button class="saveButton">Save</button>
    <button class="cancelButton">Cancel</button>
    </div>
  </div>`
  }
  document.querySelector(".tasks").innerHTML = items
  activateDeleteListener()
  activateEditListener()
  activateSaveListener()
  activateCancelListener()
}

function activateDeleteListener() {
let deleteButton = document.querySelectorAll(".deleteButton")
deleteButton.forEach((db, i) => {
  db.addEventListener("click", () => {deleteItem(i) })
})
}


function activateEditListener() {
  const editButton = document.querySelectorAll(".editButton")
  const updateController = document.querySelectorAll(".update-controller")
  const inputs = document.querySelectorAll(".add-controller textarea")
  editButton.forEach((eb, i) => {
    eb.addEventListener("click", () => {
      updateController[i].style.display = "block"
      inputs[i].disabled = false
    })
  })
}

function activateSaveListener(){
  const saveButton = document.querySelectorAll(".saveButton")
  const inputs = document.querySelectorAll(".add-controller textarea")
  saveButton.forEach((sb, i) => {
    sb.addEventListener("click", () => {
      updateItem(inputs[i].value, i)
    })
  })
}

function activateCancelListener(){
  const cancelButton = document.querySelectorAll(".cancelButton")
  const updateController = document.querySelectorAll(".update-controller")
  const inputs = document.querySelectorAll("add-controller textarea")
  cancelButton.forEach((cb, i) => {
    cb.addEventListener("click", () =>{
      updateController[i].style.display = "none"
      inputs[i].disabled = true
    })
  })
}

function updateItem(text, i){
  itemsList[i] = text
  localStorage.setItem("items", JSON.stringify(itemsList))
  location.reload()
}

function deleteItem(i){
  itemsList.splice(i, 1)
  localStorage.setItem("items", JSON.stringify(itemsList))
  location.reload()
}


function createItem(item) {
  itemsList.push(item.value)
  localStorage.setItem("items", JSON.stringify(itemsList))
  location.reload()
}

window.onload = function(){
  displayItems()
}

// const newTask = document.querySelector("#add-task");
// const tasksDiv = document.querySelector("#tasks");

// let removeTasks, editTasks, tasks;
// let updateList=""
// let count=""


// window.onload =  () => {
//     updateList="";
//     count= Objects.keys(localStorage).length;
//     displayTasks();
    
// }


// // function to display tasks
// const displayTasks = () => {
//     if (Object.keys(localStorage).length > 0) {
//         tasksDiv.style.display = "inline-block";
//     }
//     } else {
//         taskDiv.style.display= "none";
//     }
    
//     let task = Object.keys(localStorage);
//     tasks = tasks.sort();

//     for(let key of tasks){
//         let ClassValue= ""

//         let value = localStorage.getItem(key);
//         let taskInnerDiv = document.createElement("div");
//         taskInnerDiv.classList.add("task");
//         taskInnerDiv.setAttribute("id", key);
//         taskInnerDiv.innerHTML = `<span id="taskname`
//     }
// };

//     tasksDiv.innerHTML = ""

// ;

// // function to remove an item from the list
// function removeItem(item) {
//   list.removeChild(item);
// }

// // function to edit an item in the list
// function editItem(item) {
//   const text = item.firstChild.nodeValue;
//   const newText = prompt("Enter new text:", text);
//   if (newText !== null && newText.trim() !== "") { // prevent empty values
//     item.firstChild.nodeValue = newText;
//   }
// }
