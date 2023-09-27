import { addUsers } from "./modules/addUser";
import { render } from "./modules/render";
import { UserService } from "./modules/userService";
import { removeUsers } from './modules/deleteUser';

window.userService = new UserService;

userService.getUsers().then(data => {
    render(data)
})

addUsers()
removeUsers()


