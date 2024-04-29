import { renderStorage } from './renderStorage.js';

export const deleteTask = (index) => {
    const username = localStorage.getItem('username');
    const tasks = JSON.parse(localStorage.getItem(`tasks_${username}`) || '[]');
    tasks.splice(index, 1);
    localStorage.setItem(`tasks_${username}`, JSON.stringify(tasks));
    renderStorage(username); 
};