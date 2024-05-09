import { completeTask } from "./localStorage/completeTask.js";

export const addCompleteTaskHandlers = () => {
    const completeButtons = document.querySelectorAll('.btn-success');
    completeButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            completeTask(index);
        });
    });
};