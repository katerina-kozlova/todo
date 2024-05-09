export const getTasksFromStorage  = (username) => {
    const tasksJson = localStorage.getItem(username);
    return tasksJson ? JSON.parse(tasksJson) : [];
};