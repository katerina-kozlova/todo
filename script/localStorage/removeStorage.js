export const removeStorage = (index) => {
    const username = localStorage.getItem('userName'); 
    const tasks = JSON.parse(localStorage.getItem(username) ?? '[]'); 
    tasks.splice(index, 1);
    localStorage.setItem(username, JSON.stringify(tasks)); 
};