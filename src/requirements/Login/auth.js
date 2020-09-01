import { loginDaties } from './loginDaties'


/**
 * @description: Exporta para o sistema o usuário logado e seus dados.
 */
export function loggedUser() {
    return loginDaties
}

/**
 * @description: Função usada para validar se o usuário existe no sistema.
 * 
 * @param {String} email 
 * @param {String} password 
 * 
 * @see /loginDaties.js
 */
export function validateUser(email, password) {
    let response = {}

    if(loginDaties['email'] == email && loginDaties['password'] == password) {
        return (response = {'message': 'authenticated'})
    } else {
        return (response = {'message': 'Invalid Daties'})
    }
}
