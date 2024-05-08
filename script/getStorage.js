export const getStorage = (key) => {
    const getData = localStorage.getItem(key);
    if (getData) {
      return JSON.parse(getData);
    } else {
      return [];
    }
};

export const getTasksFromStorage  = (username) => {
    const tasksJson = localStorage.getItem(username);
    return tasksJson ? JSON.parse(tasksJson) : [];
};