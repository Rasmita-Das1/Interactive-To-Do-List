// // Get references to HTML elements
// const taskInput = document.getElementById("taskInput");
// const addButton = document.getElementById("addButton");
// const taskList = document.getElementById("taskList");

// // Function to add a new task
// function addTask() {
//   const taskText = taskInput.value.trim(); // Trim extra whitespace
//   if (taskText !== "") {
//     const li = document.createElement("li");
//     li.textContent = taskText;

//     // Add a delete button to each task
//     const deleteButton = document.createElement("button");
//     deleteButton.textContent = "Delete";
//     deleteButton.addEventListener("click", function() {
//       taskList.removeChild(li);
//     });

//     li.appendChild(deleteButton);
//     taskList.appendChild(li);

//     taskInput.value = ""; // Clear the input field
//   }
// }

// // Event listener for the "Add Task" button
// addButton.addEventListener("click", addTask);

// // Event listener for pressing Enter in the input field
// taskInput.addEventListener("keydown", function(event) {
//   if (event.key === "Enter") {
//     addTask();
//   }
// });
















const taskName = document.getElementById("taskName");
const dueDateTime = document.getElementById("dueDateTime");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

function addTask() {
  const name = taskName.value.trim();
  const due = dueDateTime.value;

  if (name !== "") {
    const li = document.createElement("li");

    const taskInfo = document.createElement("div");
    taskInfo.textContent = `Task: ${name}, Due: ${due}`;
    li.appendChild(taskInfo);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function() {
      taskList.removeChild(li);
    });

    li.appendChild(deleteButton);
    taskList.appendChild(li);

    taskName.value = "";
    dueDateTime.value = "";
  }
}

addButton.addEventListener("click", addTask);

taskName.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    addTask();
  }
});

// ... Existing code ...

function addTask() {
    const name = taskName.value.trim();
    const due = dueDateTime.value;
  
    if (name !== "") {
      const li = document.createElement("li");
  
      const taskInfo = document.createElement("div");
      taskInfo.textContent = `Task: ${name}, Due: ${due}`;
  
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.className = "delete-button";
      deleteButton.addEventListener("click", function() {
        taskList.removeChild(li);
      });
  
      const updateButton = document.createElement("button");
      updateButton.textContent = "Update";
      updateButton.className = "update-button";
      updateButton.addEventListener("click", function() {
        const updatedName = prompt("Enter updated task name:");
        if (updatedName !== null) {
          taskInfo.textContent = `Task: ${updatedName}, Due: ${due}`;
        }
      });
  
      li.appendChild(taskInfo);
      li.appendChild(deleteButton);
      li.appendChild(updateButton);
      taskList.appendChild(li);
  
      taskName.value = "";
      dueDateTime.value = "";
    }
  }
  
  