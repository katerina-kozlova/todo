import { deleteTask } from './deleteTask.js';
import { completeTask } from './completeTask.js';

export const createRow = (task, number) => {
    const row = document.createElement('tr');
    row.classList.add(task.completed ? 'table-success' : 'table-light');
    row.innerHTML = `
        <td>${number}</td>
        <td class='task' style='text-decoration: ${task.completed ? "line-through" : "none"}'>
            ${task.text}
        </td>
        <td>${task.completed ? 'Выполнена' : 'В процессе'}</td>
        <td>
            <button class="btn btn-danger deleteBtn">Удалить</button>
            <button class="btn btn-success completeBtn">${task.completed ? "Возобновить" : "Завершить"}</button>
        </td>
    `;

    // Добавление обработчиков событий
    row.querySelector('.deleteBtn').addEventListener('click', () => deleteTask(number - 1));
    row.querySelector('.completeBtn').addEventListener('click', () => completeTask(number - 1));

    return row;
};