import { createRow } from './createRow.js';

export const completeTask = (index) => {
    const username = localStorage.getItem('username');
    const tasks = JSON.parse(localStorage.getItem(`tasks_${username}`) || '[]');
    tasks[index].completed = !tasks[index].completed;
    localStorage.setItem(`tasks_${username}`, JSON.stringify(tasks));
    const row = document.querySelector(`tbody tr:nth-child(${index + 1})`);
    row.replaceWith(createRow(tasks[index], index + 1));
};