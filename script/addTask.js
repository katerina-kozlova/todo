import { createRow } from './createRow.js';
import { saveTasksToStorage } from "./setStorage.js";
import { getTasksFromStorage } from "./getStorage.js";



// export const addTask = (username, text) => {
    // const tasks = JSON.parse(localStorage.getItem(`tasks_${username}`) || "[]");
    // tasks.push({ text, completed: false });
    // localStorage.setItem(`tasks_${username}`, JSON.stringify(tasks));
    // const newRow = createRow({ text, completed: false }, tasks.length);
    // document.querySelector("tbody").appendChild(newRow);

//     setStorage('text', text);
//     username.append(createRow(text));
// };

// export const addTask = (task, list, username) => {
//     setStorage(`tasks_${username}`, task);
//     list.append(createRow(task));
// };


// export const addTask = (task, list, username) => {
//     setStorage(`tasks_${username}`, task);
//     list.append(createRow(task));
// };


export const addTask = (taskText, list, username) => {
    const tasks = getTasksFromStorage (username) || []; // Получаем текущие задачи
    const newTask = {
        text: taskText,
        completed: false,
        number: tasks.length + 1, // Генерируем номер задачи
    };
    tasks.push(newTask); // Добавляем задачу в массив
    saveTasksToStorage(username, tasks); // Сохраняем обновленный массив
    list.append(createRow(newTask, newTask.number)); // Добавляем задачу на страницу
};