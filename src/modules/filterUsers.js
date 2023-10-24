import { render } from "./render.js";

export const filterUsers = () => {
    const btnIsChildren = document.querySelector('#btn-isChildren');
    const btnIsPermissions = document.querySelector('#btn-isPermissions');
    const btnIsAll = document.querySelector('#btn-isAll');

    btnIsChildren.addEventListener('click', () => {
        userService.filterUsers('children').then(users => {
            render(users);
        })
    });
    btnIsPermissions.addEventListener('click', () => {
        userService.filterUsers('permissions').then(users => {
            render(users);
        })
    });
    btnIsAll.addEventListener('click', () => {
        userService.getUsers().then(users => {
            render(users);
        })
    });
}
