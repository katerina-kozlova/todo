export const updateButtonState = (inputElement, buttonElement) => {
    buttonElement.disabled = inputElement.value.trim() === '';
};