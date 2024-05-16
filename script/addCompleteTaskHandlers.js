import { completeTask } from "./localStorage/completeTask.js";
import { removeStorage } from "./localStorage/removeStorage.js";

export const addCompleteTaskHandlers = (list) => {
    list.addEventListener('click', (e) => {
        const target = e.target;
        const taskElement = target.closest('tr');
        const taskIndex = Array.from(taskElement.parentNode.children).indexOf(taskElement);

        if (target.classList.contains('btn-success')) {
            completeTask(taskIndex);
        } else if (target.classList.contains('btn-danger')) {
            taskElement.remove();
            removeStorage(taskIndex);

            // Обновить порядковый номер задач после удаления одной задачи
            const rows = list.querySelectorAll('tr');
            for (let i = 0; i < rows.length; i++) {
                const cellNumber = rows[i].querySelector('td:first-child');
                cellNumber.textContent = i + 1;
            }
        }
    });
};