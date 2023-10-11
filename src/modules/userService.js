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
        }).then(res => res.json())
    }

    changeUser(id, data){
        return fetch(this.url + `/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                "Content-Type":"application/json"
            }
        }).then(res => res.json())
    }

    getUser(id){
        return fetch(this.url + `/${id}`).then(res => res.json())

    }

    editUser(id, user){
        return fetch(this.url + `/${id}`, {
            method: 'PUT',
            body: JSON.stringify(user),
            headers: {
                "Content-Type":"application/json"
            }
        }).then(res => res.json())
    }
}