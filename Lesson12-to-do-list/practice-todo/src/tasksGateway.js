const baseUrl = 'https://61dcca24591c3a0017e1aa84.mockapi.io/api/v1/tasks';

export const createTask = taskData =>
  fetch(baseUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify(taskData),
  }).then(response => {
    if (!response.ok) {
      throw new Error('Failed to create task');
    }
  });

export const fetchTasksList = async () => {
  const res = await fetch(baseUrl);
  if (res.ok) {
    return res.json();
  }
};

export const updateTask = async (taskId, taskData) => {
  const response = await fetch(`${baseUrl}/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(taskData),
  });
  if (!response.ok) {
    throw new Error('Faild to change task');
  }
};

export const deleteTask = async taskId => {
  const response = await fetch(`${baseUrl}/${taskId}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Faild to delate task');
  }
};
