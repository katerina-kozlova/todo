import { createRow } from './createRow.js';

export const renderStorage = (name) => {
    const tasks = JSON.parse(localStorage.getItem(`tasks_${name}`) || "[]");
    const tbody = document.querySelector("tbody");
    tbody.innerHTML = "";

    tasks.forEach((task, index) => {
        const row = createRow(task, index + 1);
        tbody.appendChild(row);
    });
};