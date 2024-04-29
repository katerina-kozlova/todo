export const updateButtonState = () => {
    const input = document.querySelector('input[type="text"]');
    const button = document.querySelector('button[type="submit"]');
    button.disabled = !input.value.trim();
};