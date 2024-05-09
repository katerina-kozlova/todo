export const saveTasksToStorage = (username, tasks) => {
    const tasksJson = JSON.stringify(tasks);
    localStorage.setItem(username, tasksJson);
};