import { requestLogin } from './requestLogin.js';
import { renderStorage } from './renderStorage.js';
import { updateButtonState } from './updateButtonState.js';
import { addTask } from './addTask.js';

const init = () => {
    const buttonSubmitForm = document.querySelector('.btn-primary');
    const form = document.querySelector('form');
    const inputForm = form.querySelector('.form-control');
    const list = document.querySelector('tbody');
    const username = requestLogin();

    renderStorage(username, list);
    updateButtonState(inputForm, buttonSubmitForm);

    inputForm.addEventListener('input', () => {
        updateButtonState(inputForm, buttonSubmitForm);
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskText = inputForm.value;
        addTask(taskText, list, username);
        form.reset();
        updateButtonState(inputForm, buttonSubmitForm);
    });
};
init();