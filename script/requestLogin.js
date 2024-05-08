export const requestLogin = () => {
    const username = prompt('Уточните, пожалуйста, Ваше имя:');
    localStorage.setItem('userName', username);

    return username;
};