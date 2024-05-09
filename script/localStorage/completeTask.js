import { updateTableRow } from "../updateTableRow.js";

export const completeTask = (index) => {
    const username = localStorage.getItem('userName');
    const tasks = JSON.parse(localStorage.getItem(username) ?? '[]'); 

    tasks[index].completed = !tasks[index].completed;
    localStorage.setItem(username, JSON.stringify(tasks));

    // Обновить строку таблицы
    updateTableRow(index, tasks[index]);
};