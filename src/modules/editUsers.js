export const editUsers = () =>{
    const tbody = document.querySelector('#table-body');
    const form = document.querySelector('form');
    const nameInput = form.querySelector('input#form-name')
    const emailInput = form.querySelector('input#form-email')
    const childrenInput = form.querySelector('input#form-children')
    
    tbody.addEventListener('click', (event) => {
       if (event.target.closest('.btn-edit')) {
            const tr = event.target.closest('tr');
            const id = tr.dataset.key;
            userService.getUser(id).then(user => {
                console.log(user);
                nameInput.value = user.name;
                emailInput.value = user.email;
                childrenInput.value = user.children;

                form.dataset.method = id;
            })
       }
       form.addEventListener('submit', e => {
            e.preventDefault()

            
            if (form.dataset.method) {
                const id = form.dataset.method
                const user = {
                    name: nameInput.value,
                    email: emailInput.value,
                    chidren: childrenInput.checked,
                    permissions: false
                }
                userService.editUser(id,user).then(() => {
                    userService.getUsers().then(users => {
                        render(users)
                        form.reset()
                        form.removeAttribute('data-method')
                    })
                })
            }
            
        })

    })
}