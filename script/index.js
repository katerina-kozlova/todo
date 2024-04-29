import { requestLogin } from './requestLogin.js';
import { renderStorage } from './renderStorage.js';
import { updateButtonState } from './updateButtonState.js';


const init = () => {
    const user = requestLogin();
    renderStorage(user);
    updateButtonState();
};
init();