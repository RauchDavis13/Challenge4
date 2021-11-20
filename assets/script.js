// const intro = {
//   Title = document.createElement("h1"),
//   Title:className= "introTitle",
//   Title:textContent("Coding Quiz Challenge"),
//   introText = document.createElement("p"),
//   introText:className = "introText",
//   introText:textContent("Try to answer the following code-related questions within the time limit.  Keep in mind that incorrect answers will penalize your score/time by 10 seconds"),
//   introBtn = document.createElement("button"),
//   introBtn:className = "introBtn",
//   introBtn:innerText = "Start",
//}

var timer = 10;


const Questions = [{
    id: 0,
    q: "Commonly used data types DO NOT include:",
    a: [{ text: "1. strings", isCorrect: false},
        { text: "2. boolean", isCorrect: false},
        { text: "3. alerts", isCorrect: true},
        { text: "4. numbers", isCorrect: false}
      ]
  },
  {
    id: 1,
    q: "The condition in an if/false statement is enclosed with ___________",
    a: [{ text: "1. quotes", isCorrect: false},
        { text: "2. curly brackets", isCorrect: true},
        { text: "3. parenthesis", isCorrect: false},
        { text: "4. square brackets", isCorrect: false}
      ]
  },
  {
    id: 2,
    q: "Arrays in Javascript can be used to store ______________",
    a: [{ text: "1. numbers and strings", isCorrect: false},
        { text: "2. other arrays", isCorrect: false},
        { text: "3. booleans", isCorrect: false},
        { text: "4. all of the above", isCorrect: true}
      ]
  },
  {
    id: 3,
    q:  "String values must be enclosed within ____________ when being assigned variables",
    a: [{ text: "1. commas", isCorrect: false},
        { text: "2. curly brackets", isCorrect: false},
        { text: "3. quotes", isCorrect: true},
        { text: "4. parenthesis", isCorrect: false}
      ]
  },
  {
    id: 4,
    q: "A very useful tool used during development and debugging for printing content to the debugger",
    a: [{ text: "1. Javascript", isCorrect: false},
        { text: "2. terminal/bash", isCorrect: false},
        { text: "3. for loops", isCorrect: false},
        { text: "4. console.log", isCorrect: true}
      ]    
   }
]






var counter = document.querySelector("#timer");

var screen = document.querySelector("#content-box");


// var screenContent = function() {
//   document.getElementById("page-content").innerHTML = Questions[1];
// }
// screenContent();

  
// Set start
var start = true;
var score = 0;

function clock () {
  var countdown = setInterval(function() {
    // If there are no more words left in the message
    if (timer <= 0) {
      // Use `clearInterval()` to stop the timer
      clearInterval(countdown);
      alert("Your Time Is Up!");
      
    } else {
      // Display one word of the message
      counter.textContent = timer;
      timer--;

    }
  }, 1000);
}
clock();


// Cycle through question array
function iterate(id) {
  
    // Getting the result display section
    var result = document.getElementsByClassName("result");
    result[0].innerText = "";
  
    // Getting the question
    const question = document.getElementById("question-box");
  
  
    // Setting the question text
    question.innerText = Questions[id].q;
  
    // Creating answer choices
    var answerOne = document.createElement("button");
    answerOne.setAttribute("class", "answerBtn");
  
    var answerTwo = document.createElement("button");
    answerTwo.className = "answerBtn";

    var answerThree = document.createElement("button");
    answerThree.className = "answerBtn";

    var answerFour = document.createElement("button");
    answerFour.className = "answerBtn";
  
    // Providing answer text 
    answerOne.innerText = Questions[id].a[0].text;
    console.log(answerOne);
    answerTwo.innerText = Questions[id].a[1].text;
    answerThree.innerText = Questions[id].a[2].text;
    answerFour.innerText = Questions[id].a[3].text;
  
    // Providing the true or false value to the options
    answerOne.value = Questions[id].a[0].isCorrect;
    answerTwo.value = Questions[id].a[1].isCorrect;
    answerThree.value = Questions[id].a[2].isCorrect;
    answerFour.value = Questions[id].a[3].isCorrect;
  
    var selected = "";
  
    // Show selection for answerOne
    answerOne.addEventListener("click", () => {
       selected = answerOne.value;
    })
  
    // Show selection for answerTwo
    answerTwo.addEventListener("click", () => {
       selected = answerTwo.value;
    })
  
    // Show selection for answerThree
    answerThree.addEventListener("click", () => {
        selected = answerThree.value;
    })
  
    // Show selection for answerFour
    answerFour.addEventListener("click", () => {
        selected = answerFour.value;
    })
  
    // Grabbing the evaluate button
    const evaluate = document.getElementsByClassName("evaluate");
    
    // Evaluate method
//     evaluate[0].addEventListener("click", () => {
//         if (selected == "true") {
//             result[0].innerHTML = "Correct";
//           } else {
//             result[0].innerHTML = "Wrong";
     
//         }
//     })
}
  


if (start) {
    iterate("0");
}
  
// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;
  
next.addEventListener("click", () => {
    start = false;
    if (id < 2) {
        id++;
        iterate(id);
        console.log(id);
    }
  
})
// var taskFormHandler = function (event) {
//   event.preventDefault();
//   var taskNameInput = document.querySelector("input[name='task-name']").value;
//   var taskTypeInput = document.querySelector("select[name='task-type']").value;

//   // check if inputs are empty (validate)
//   if (!taskNameInput || !taskTypeInput) {
//     alert("You need to fill out the task form!");
//     return false;
//   }

  // reset form fields for next task to be entered
//   document.querySelector("input[name='task-name']").value = "";
//   document.querySelector("select[name='task-type']").selectedIndex = 0;

//   // check if task is new or one being edited by seeing if it has a data-task-id attribute
//   var isEdit = formEl.hasAttribute("data-task-id");

//   if (isEdit) {
//     var taskId = formEl.getAttribute("data-task-id");
//     completeEditTask(taskNameInput, taskTypeInput, taskId);
//   } else {
//     var taskDataObj = {
//       name: taskNameInput,
//       type: taskTypeInput,
//       status: "to do",
//     };

//     createTaskEl(taskDataObj);
//   }
// };

// var createTaskEl = function(taskDataObj) {
//   var listItemEl = document.createElement("li");
//   listItemEl.className = "task-item";
//   listItemEl.setAttribute("data-task-id", taskIdCounter);

//   var taskInfoEl = document.createElement("div");
//   taskInfoEl.className = "task-info";
//   taskInfoEl.innerHTML =
//     "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
//   listItemEl.appendChild(taskInfoEl);

//   var taskActionsEl = createTaskActions(taskIdCounter);
//   listItemEl.appendChild(taskActionsEl);

//   switch (taskDataObj.status) {
//     case "to do":
//       taskActionsEl.querySelector("select[name='status-change']").selectedIndex = 0;
//       tasksToDoEl.append(listItemEl);
//       break;
//     case "in progress":
//       taskActionsEl.querySelector("select[name='status-change']").selectedIndex = 1;
//       tasksInProgressEl.append(listItemEl);
//       break;
//     case "completed":
//       taskActionsEl.querySelector("select[name='status-change']").selectedIndex = 2;
//       tasksCompletedEl.append(listItemEl);
//       break;
//     default:
//       console.log("Something went wrong!");
//   }

//   // save task as an object with name, type, status, and id properties then push it into tasks array
//   taskDataObj.id = taskIdCounter;

//   tasks.push(taskDataObj);

//   // save tasks to localStorage
//   saveTasks();

//   // increase task counter for next unique task id
//   taskIdCounter++;
// };

// var createTaskActions = function (taskId) {
//   // create container to hold elements
//   var actionContainerEl = document.createElement("div");
//   actionContainerEl.className = "task-actions";

//   // create edit button
//   var editButtonEl = document.createElement("button");
//   editButtonEl.textContent = "Edit";
//   editButtonEl.className = "btn edit-btn";
//   editButtonEl.setAttribute("data-task-id", taskId);
//   actionContainerEl.appendChild(editButtonEl);
//   // create delete button
//   var deleteButtonEl = document.createElement("button");
//   deleteButtonEl.textContent = "Delete";
//   deleteButtonEl.className = "btn delete-btn";
//   deleteButtonEl.setAttribute("data-task-id", taskId);
//   actionContainerEl.appendChild(deleteButtonEl);
//   // create change status dropdown
//   var statusSelectEl = document.createElement("select");
//   statusSelectEl.setAttribute("name", "status-change");
//   statusSelectEl.setAttribute("data-task-id", taskId);
//   statusSelectEl.className = "select-status";
//   actionContainerEl.appendChild(statusSelectEl);
//   // create status options
//   var qOneChoices = ["To Do", "In Progress", "Completed"];

//   for (var i = 0; i < statusChoices.length; i++) {
//     // create option element
//     var statusOptionEl = document.createElement("option");
//     statusOptionEl.setAttribute("value", statusChoices[i]);
//     statusOptionEl.textContent = statusChoices[i];

//     // append to select
//     statusSelectEl.appendChild(statusOptionEl);
//   }

//   return actionContainerEl;
// };



// var completeEditTask = function (taskName, taskType, taskId) {
//   // find task list item with taskId value
//   var taskSelected = document.querySelector(
//     ".task-item[data-task-id='" + taskId + "']"
//   );

//   // set new values
//   taskSelected.querySelector("h3.task-name").textContent = taskName;
//   taskSelected.querySelector("span.task-type").textContent = taskType;

//   // loop through tasks array and task object with new content
//   for (var i = 0; i < tasks.length; i++) {
//     if (tasks[i].id === parseInt(taskId)) {
//       tasks[i].name = taskName;
//       tasks[i].type = taskType;
//     }
//   }

//   alert("Task Updated!");

//   // remove data attribute from form
//   formEl.removeAttribute("data-task-id");
//   // update formEl button to go back to saying "Add Task" instead of "Edit Task"
//   formEl.querySelector("#save-task").textContent = "Add Task";
//   // save tasks to localStorage
//   saveTasks();
// };

// var taskButtonHandler = function (event) {
//   // get target element from event
//   var targetEl = event.target;

//   if (targetEl.matches(".edit-btn")) {
//     console.log("edit", targetEl);
//     var taskId = targetEl.getAttribute("data-task-id");
//     editTask(taskId);
//   } else if (targetEl.matches(".delete-btn")) {
//     console.log("delete", targetEl);
//     var taskId = targetEl.getAttribute("data-task-id");
//     deleteTask(taskId);
//   }
// };

// var taskStatusChangeHandler = function (event) {
//   console.log(event.target.value);

//   // find task list item based on event.target's data-task-id attribute
//   var taskId = event.target.getAttribute("data-task-id");

//   var taskSelected = document.querySelector(
//     ".task-item[data-task-id='" + taskId + "']"
//   );

//   // convert value to lower case
//   var statusValue = event.target.value.toLowerCase();

//   if (statusValue === "to do") {
//     tasksToDoEl.appendChild(taskSelected);
//   } else if (statusValue === "in progress") {
//     tasksInProgressEl.appendChild(taskSelected);
//   } else if (statusValue === "completed") {
//     tasksCompletedEl.appendChild(taskSelected);
//   }

//   // update task's in tasks array
//   for (var i = 0; i < tasks.length; i++) {
//     if (tasks[i].id === parseInt(taskId)) {
//       tasks[i].status = statusValue;
//     }
//   }

//   // save to localStorage
//   saveTasks();
// };

// var editTask = function (taskId) {
//   console.log(taskId);

//   // get task list item element
//   var taskSelected = document.querySelector(
//     ".task-item[data-task-id='" + taskId + "']"
//   );

//   // get content from task name and type
//   var taskName = taskSelected.querySelector("h3.task-name").textContent;
//   console.log(taskName);

//   var taskType = taskSelected.querySelector("span.task-type").textContent;
//   console.log(taskType);

//   // write values of taskName and taskType to form to be edited
//   document.querySelector("input[name='task-name']").value = taskName;
//   document.querySelector("select[name='task-type']").value = taskType;

//   // set data attribute to the form with a value of the task's id so it knows which one is being edited
//   formEl.setAttribute("data-task-id", taskId);
//   // update form's button to reflect editing a task rather than creating a new one
//   formEl.querySelector("#save-task").textContent = "Save Task";
// };

// var deleteTask = function (taskId) {
//   console.log(taskId);
//   // find task list element with taskId value and remove it
//   var taskSelected = document.querySelector(
//     ".task-item[data-task-id='" + taskId + "']"
//   );
//   taskSelected.remove();

//   // create new array to hold updated list of tasks
//   var updatedTaskArr = [];

//   // loop through current tasks
//   for (var i = 0; i < tasks.length; i++) {
//     // if tasks[i].id doesn't match the value of taskId, let's keep that task and push it into the new array
//     if (tasks[i].id !== parseInt(taskId)) {
//       updatedTaskArr.push(tasks[i]);
//     }
//   }

//   // reassign tasks array to be the same as updatedTaskArr
//   tasks = updatedTaskArr;
//   saveTasks();
// };

// var saveTasks = function() {
//   localStorage.setItem("tasks", JSON.stringify(tasks));
// };

// var loadTasks = function() {
//   var savedTasks = localStorage.getItem("tasks");
//   // if there are no tasks, set tasks to an empty array and return out of the function
//   // if (!savedTasks) {
//   //   return false;
//   }
//   console.log("Saved tasks found!");
//   // else, load up saved tasks

//   // parse into array of objects
//   savedTasks = JSON.parse(savedTasks);

//   // loop through savedTasks array
//   for (var i = 0; i < savedTasks.length; i++) {
//     // pass each task object into the `createTaskEl()` function
//     createTaskEl(savedTasks[i]);
//   }
// };

// Create a new task
// formEl.addEventListener("submit", taskFormHandler);

// // for edit and delete buttons
// pageContentEl.addEventListener("click", taskButtonHandler);

// // for changing the status
// pageContentEl.addEventListener("change", taskStatusChangeHandler);

// loadTasks();
