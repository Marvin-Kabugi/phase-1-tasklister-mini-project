document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    addList(e.target.querySelector("#new-task-description").value);
    form.reset();
  })
});

function addList(value){
  const task = document.getElementById('tasks');
  const el = document.createElement('li');
  const btn = document.createElement('button');
  btn.addEventListener('click', (e) => {
    e.target.parentNode.remove();
  });
  btn.textContent = "x"
  el.textContent = `${value} `;
  el.appendChild(btn);
  task.appendChild(el);
}