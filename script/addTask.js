import { createRow } from './createRow.js';

export const addTask = (name, text) => {
    const tasks = JSON.parse(localStorage.getItem(`tasks_${name}`) || "[]");
    tasks.push({ text, completed: false });
    localStorage.setItem(`tasks_${name}`, JSON.stringify(tasks));
    const newRow = createRow({ text, completed: false }, tasks.length);
    document.querySelector("tbody").appendChild(newRow);
};