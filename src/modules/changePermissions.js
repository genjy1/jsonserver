'use strict'
import { render } from "./render"

export const changePermissions = () => {
    const tbody = document.querySelector('#table-body');
    
    tbody.addEventListener('click', (event) => {
       if (event.target.closest('input[type=checkbox]')) {
            const tr = event.target.closest('tr');
            const input = tr.querySelector('input[type=checkbox]');
            const id = tr.dataset.key;

            console.log(id);
            console.log(input.checked);
            userService.changeUser(id, {permissions: input.checked}).then(res => {
                userService.getUsers().then(users => {
                    render(users)
                })
            })
            console.log(tr)
       }
    })
}