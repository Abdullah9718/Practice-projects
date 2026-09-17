const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

taskList.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete-btn')) {
    e.target.parentElement.remove();
  }
});

addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value;
  if (taskText.trim() == '') {
    alert('Please enter a task.');
    return;
  }
  const newLi = document.createElement('li');
  newLi.innerHTML = `${taskText} <span class="delete-btn">❌</span>`;
  taskList.appendChild(newLi);
  taskInput.value = '';
});