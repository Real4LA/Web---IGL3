class Task {
  constructor(task, doneStatus) {
    this.task = task;
    this.doneStatus = doneStatus;
  }
}

let loadedArray = JSON.parse(localStorage.getItem("tasks")) || [];
let tasks = loadedArray.map((t) => new Task(t.task, t.doneStatus));

console.log("Bienvenue!");

function deleteTask() {
  let li = this.closest("li");
  let span = li.querySelector("span");
  let index = searchTask(span.textContent);
  tasks.splice(index, 1);
  console.log(tasks);
  li.remove();
  localStorage.setItem("tasks", JSON.stringify(tasks));
  counter();
}

function searchTask(task) {
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].task == task) {
      return i;
    }
  }
  return -1;
}

function doneTask() {
  let li = this.closest("li");
  let span = li.querySelector("span");
  let index = searchTask(span.textContent);

  tasks[index].doneStatus = !tasks[index].doneStatus;

  if (span.style.textDecoration == "line-through") {
    span.style.textDecoration = "none";
  } else {
    span.style.textDecoration = "line-through";
  }
  console.log(tasks);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  counter();
}

function addTask() {
  let task = document.getElementById("input").value;
  console.log(tasks);
  if (task != "") {
    if (searchTask(task) != -1) {
      alert("Task Already Exists!");
      document.getElementById("input").value = "";
      return null;
    }
    const t = new Task(task, false);
    tasks.push(t);
    let list = document.getElementById("list");
    let li = document.createElement("li");
    let text = document.createElement("span");
    let del = document.createElement("button");
    let done = document.createElement("button");
    let actions = document.createElement("div");

    text.textContent = task;
    text.className = "text";
    del.textContent = "Delete";
    done.textContent = "Done";

    del.addEventListener("click", deleteTask);
    done.addEventListener("click", doneTask);

    actions.appendChild(del);
    actions.appendChild(done);
    li.appendChild(text);
    li.appendChild(actions);
    list.appendChild(li);
    document.getElementById("input").value = "";
    localStorage.setItem("tasks", JSON.stringify(tasks));
  } else {
    alert("Type a Task!");
  }
  counter();
}

let input = document.getElementById("input");

input.addEventListener("keydown", function (event) {
  if (event.code === "Enter") {
    addTask();
  }
});

function showTasks() {
  let loadedArray = JSON.parse(localStorage.getItem("tasks")) || [];
  let tasks = loadedArray.map((t) => new Task(t.task, t.doneStatus));
  for (let i = 0; i < tasks.length; i++) {
    let list = document.getElementById("list");
    let li = document.createElement("li");
    let text = document.createElement("span");
    let del = document.createElement("button");
    let done = document.createElement("button");
    let actions = document.createElement("div");

    text.textContent = tasks[i].task;
    text.className = "text";
    del.textContent = "Delete";
    done.textContent = "Done";

    del.addEventListener("click", deleteTask);
    done.addEventListener("click", doneTask);

    actions.appendChild(del);
    actions.appendChild(done);
    li.appendChild(text);
    li.appendChild(actions);
    list.appendChild(li);

    if (tasks[i].doneStatus) {
      text.style.textDecoration = "line-through";
    }
  }
  console.log(tasks);
  counter();
}

function deleteAll() {
  localStorage.setItem("tasks", JSON.stringify([]));
  location.reload();
}

function counter() {
  let loadedArray = JSON.parse(localStorage.getItem("tasks")) || [];
  let tasks = loadedArray.map((t) => new Task(t.task, t.doneStatus));
  let doneCounter = document.getElementById("done");
  let notdoneCounter = document.getElementById("notdone");
  let done = 0;
  let notdone = 0;
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].doneStatus) {
      done++;
    } else {
      notdone++;
    }
  }
  doneCounter.textContent = done;
  notdoneCounter.textContent = notdone;
}

function filterTasks() {
  let loadedArray = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = loadedArray.map((t) => new Task(t.task, t.doneStatus));
  toggleHidden("main");
  let searchButton = document.createElement("button");
  searchButton.textContent = "Search";
  let exitButton = document.createElement("button");
  exitButton.textContent = "Exit";

  let hintInput = document.createElement("input");
  hintInput.placeholder = "Type Here ...";
  let container = document.getElementById("second");

  let results = [];

  container.appendChild(hintInput);
  container.appendChild(searchButton);
  container.appendChild(exitButton);

  function toggleHidden(id) {
    const el = document.getElementById(id);
    if (el.style.display === "none") {
      el.style.display = "flex";
    } else {
      el.style.display = "none";
    }
  }
  function search() {
    results = [];
    let hint = hintInput.value;
    if (hint == "") {
      alert("Invalid Input !");
      return null;
    } else {
      for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].task.toLowerCase().includes(hint.toLowerCase())) {
          results.push(i);
        }
      }
      console.log(results);
    }
  }
  function exit() {
    exitButton.remove();
    searchButton.remove();
    hintInput.remove();
    container.innerHTML = "";

    toggleHidden("main");
    let main = document.getElementById("main");
    let list = main.querySelector("ul");
    list.innerHTML = "";
    showTasks();
  }
  function showFilteredTasks() {
    let list;
    if (container.querySelector("ul")) {
      list = container.querySelector("ul");
      list.innerHTML = "";
    } else {
      list = document.createElement("ul");
      container.appendChild(list);
    }
    for (let i = 0; i < results.length; i++) {
      let li = document.createElement("li");
      let text = document.createElement("span");
      let del = document.createElement("button");
      let done = document.createElement("button");
      let actions = document.createElement("div");
      text.textContent = tasks[results[i]].task;
      if (tasks[results[i]].doneStatus) {
        text.style.textDecoration = "line-through";
      }
      text.className = "text";
      del.textContent = "Delete";
      done.textContent = "Done";

      del.addEventListener("click", deleteTask);
      done.addEventListener("click", doneTask);

      actions.appendChild(del);
      actions.appendChild(done);
      li.appendChild(text);
      li.appendChild(actions);
      list.appendChild(li);
      console.log(tasks);
    }
    counter();
  }

  searchButton.addEventListener("click", search);
  searchButton.addEventListener("click", showFilteredTasks);
  hintInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      search();
      showFilteredTasks();
    }
  });
  exitButton.addEventListener("click", exit);
  console.log("entered");
}

document.addEventListener("DOMContentLoaded", showTasks);
document.addEventListener("DOMContentLoaded", counter);
