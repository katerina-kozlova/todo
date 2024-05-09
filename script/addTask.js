import { createRow } from './createRow.js';
import { saveTasksToStorage } from "./localStorage/saveTasksToStorage.js";
import { getTasksFromStorage } from "./localStorage/getTasksFromStorage.js";

export const addTask = (taskText, list, username) => {
    const tasks = getTasksFromStorage (username) || []; // Получить текущие задачи
    const newTask = {
        text: taskText,
        completed: false,
        number: tasks.length + 1, // Сгенерировать номер задачи
    };
    tasks.push(newTask); // Добавить задачу в массив
    saveTasksToStorage(username, tasks); // Сохранить обновленный массив
    list.append(createRow(newTask, newTask.number)); // Добавить задачу на страницу
};