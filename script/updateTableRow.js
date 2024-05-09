export const updateTableRow = (index, task) => {
    const row = document.querySelector(`tbody tr:nth-child(${index + 1})`);
    row.classList.toggle('table-success');
    row.classList.toggle('table-light');
    const cellTask = row.querySelector('.task');
    cellTask.style.textDecoration = task.completed ? "line-through" : "none";
    const cellStatus = row.querySelector('td:nth-child(3)'); // Получить ячейку статуса
    cellStatus.textContent = task.completed ? "Выполнена" : "В процессе";
    const buttonComplete = row.querySelector('.btn-success');
    buttonComplete.textContent = task.completed ? "Возобновить" : "Завершить";
};