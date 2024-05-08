import { completeTask } from './completeTask.js';

export const createRow = (task) => {
    const row = document.createElement('tr');
    const cellNumber = document.createElement('td');
    const cellTask = document.createElement('td');
    const cellStatus = document.createElement('td');
    const buttonContainer = document.createElement('td');
    const buttonDelete = document.createElement('button');
    const buttonComplete = document.createElement('button');

    row.classList.add(task.completed ? 'table-success' : 'table-light');

    cellNumber.textContent = task.number;

    cellTask.classList.add('task');
    cellTask.style.textDecoration = `${task.completed ? "line-through" : "none"}`;
    cellTask.textContent = task.text;

    cellStatus.textContent = `${task.completed ? "Выполнена" : "В процессе"}`;

    buttonDelete.classList.add('btn', 'btn-danger', 'me-1');
    buttonDelete.textContent = 'Удалить';

    buttonComplete.classList.add('btn', 'btn-success');
    buttonComplete.textContent = `${task.completed ? "Возобновить" : "Завершить"}`;

    buttonContainer.append(buttonDelete, buttonComplete);

    row.append(
        cellNumber,
        cellTask,
        cellStatus,
        buttonContainer
      );

    return row;
};