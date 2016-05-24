// Set task status
export function toggleTaskStatus(index) {
  return {
    type: 'TOGGLE_STATUS',
    index
  }
}

// Add task
export function addTask(taskId, title, isActive, picture) {
  return {
    type: 'ADD_TASK',
    taskId,
    title,
    isActive,
    picture
  }
}


// Remove task
export function removeTask(taskId, index) {
  return {
    type: 'REMOVE_TASK',
    taskId,
    index
  }
}
