document.addEventListener('DOMContentLoaded', () => {
  const taskForm = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');

  taskForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const taskDescription = document.getElementById('new-task-description').value;
    const priority = document.getElementById('priority').value; // Assume a dropdown for priority

    // Create a new task item
    const taskItem = document.createElement('li');
    taskItem.textContent = taskDescription;

    // Set the class based on priority
    taskItem.className = getPriorityClass(priority);

    // Add delete button and event listener
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      taskItem.remove();
    });

    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);
  });
});

function getPriorityClass(priority) {
  switch (priority) {
    case 'high':
      return 'high-priority';
    case 'medium':
      return 'medium-priority';
    case 'low':
      return 'low-priority';
    default:
      return '';
  }
}