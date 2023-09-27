'use strict'

export const removeUsers = () => {

    const tbody = document.querySelector('#table-body');
    
    tbody.addEventListener('click', (event) => {
       if (event.target.closest('.btn-remove')) {
            const tr = event.target.closest('tr');
            const id = tr.dataset.key;

            userService.removeUser(id).then(res => {
                userService.getUsers().then(users => {
                    render(users)
                })
            })
            console.log(tr)
       }
    })
}