let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let filter = "All";

function save() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
  let text = taskText.value.trim();
  let category = taskCategory.value;

  if (text === "") return;

  tasks.push({
    id: Date.now(),
    text: text,
    category: category,
    done: false
  });

  taskText.value = "";
  save();
  render();
}

function toggleTask(id) {
  for (let t of tasks) {
    if (t.id === id) {
      t.done = !t.done;
    }
  }
  save();
  render();
}

function deleteTask(id) {
  tasks = tasks.filter(t => t.id !== id);
  save();
  render();
}

function setFilter(f) {
  filter = f;
  render();
}

function render() {
  taskList.innerHTML = "";

  let showTasks = filter === "All"
    ? tasks
    : tasks.filter(t => t.category === filter);

  for (let t of showTasks) {
    let li = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = t.done;
    checkbox.onclick = () => toggleTask(t.id);

    let span = document.createElement("span");
    span.textContent = ` ${t.text} [${t.category}] `;
    if (t.done) span.style.textDecoration = "line-through";

    let del = document.createElement("button");
    del.textContent = "X";
    del.onclick = () => deleteTask(t.id);

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(del);

    taskList.appendChild(li);
  }

  updateCount();
}

function updateCount() {
  let work = tasks.filter(t => t.category === "Work").length;
  let personal = tasks.filter(t => t.category === "Personal").length;
  count.textContent = `Work: ${work} | Personal: ${personal}`;
}

render();