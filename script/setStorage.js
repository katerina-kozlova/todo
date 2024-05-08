import { getStorage } from "./getStorage.js";

export const setStorage = (key, obj) => {
    let newData = getStorage(key);
    newData.push(obj);
    localStorage.setItem(key, JSON.stringify(newData));
};

export const saveTasksToStorage = (username, tasks) => {
    const tasksJson = JSON.stringify(tasks);
    localStorage.setItem(username, tasksJson);
};