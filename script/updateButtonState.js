export const updateButtonState = (inputElement, buttonElement) => {
    if (!inputElement.validity.valid) {
        buttonElement.disabled = true; 
    } else {
        buttonElement.disabled = false; 
    }
};