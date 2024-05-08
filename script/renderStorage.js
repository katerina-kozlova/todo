import { createRow } from './createRow.js';
import { getTasksFromStorage } from './getStorage.js';

export const renderStorage = (username, list) => {
    //const tasks = JSON.parse(localStorage.getItem(`tasks_${username}`) || "[]");
    
    // const oldKey = "tasks_null";
    // const newKey = `tasks_${localStorage.getItem('username')}`; // tasks_Катя
    
    // const tasks = JSON.parse(localStorage.getItem(oldKey) || '[]');
    // localStorage.setItem(newKey, JSON.stringify(tasks));
    // localStorage.removeItem(oldKey);

    // const tbody = document.querySelector("tbody");
    // tbody.innerHTML = "";

    // tasks.forEach((task, index) => {
    //     const row = createRow(task, index + 1);
    //     tbody.appendChild(row);
    // });

    const tasks = getTasksFromStorage(username) || [];
    tasks.forEach((task) => {
        list.append(createRow(task, task.number));
    });
};