import { createRow } from '../createRow.js';
import { getTasksFromStorage } from './getTasksFromStorage.js';

export const renderStorage = (username, list) => {
    const tasks = getTasksFromStorage(username) || [];
    tasks.forEach((task) => {
        list.append(createRow(task, task.number));
    });
};