import { render } from "./render";

export const addUsers = () =>{
    const form = document.querySelector('form');
    const nameInput = form.querySelector('input#form-name')
    const emailInput = form.querySelector('input#form-email')
    const childrenInput = form.querySelector('input#form-children')

    form.addEventListener('submit', e => {
        e.preventDefault();

        form.addEventListener('submit', e => {
            e.preventDefault()

            
            if (!form.dataset.method) {
                const user = {
                    name: nameInput.value,
                    email: emailInput.value,
                    chidren: childrenInput.checked,
                    permissions: false
                }
            }
            userService.addUser(user).then(res => {
                userService.getUsers().then(users=> {
                    render(users);
                    form.reset();
                })
            })
        })

        const user = {
            name: nameInput.value,
            email: emailInput.value,
            children: childrenInput.checked,
            permissions: false
        }
        
        
    })
}