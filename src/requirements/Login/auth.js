import { loginDaties } from './loginDaties'


export function loggedUser() {
    return loginDaties
}

export function validateUser(email, password) {
    let response = {}

    if(loginDaties['email'] == email && loginDaties['password'] == password) {
        return (response = {'message': 'authenticated'})
    } else {
        return (response = {'message': 'Invalid Daties'})
    }
}
