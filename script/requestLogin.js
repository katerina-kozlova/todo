export const requestLogin = () => {
    const userName = prompt('Уточните, пожалуйста, Ваше имя:');
    localStorage.setItem('userName', userName);

    return userName;
};