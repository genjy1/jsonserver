import { render } from './render'
import { debounce } from './helpers';

export const searchUsers = () => {
    console.log('searchUsers');

    const input = document.querySelector('#search-input');
    
    const debounceSearch = debounce(() => {
        userService.getSearchUsers(input.value).then(users => render(users));
    },500)
    input.addEventListener('input', debounceSearch) 
}