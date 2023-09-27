export class UserService {
    url = 'http://localhost:1337/users'

    getUsers(url){
        return fetch(this.url).then(response => response.json())
    }

    addUser(user, url) {
        return fetch(this.url, {
            method: 'POST',
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(user)
        }).then(res => res.json())
    }

    removeUser(id) {
        return fetch(this.url + `/${id}`, {
            method: 'DELETE'
        })
    }
}