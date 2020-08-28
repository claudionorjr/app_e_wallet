/**
 * @description: Reducer recebe dados do Action do Component e envia um novo estado.
 */
export default function reducer (state = {response: false, account: {
                                                            "id": 0,
                                                            "email": "",
                                                            "password": "",
                                                            "name": '',
                                                            "accountBank": "",
                                                            "agency": "",
                                                            "amount": 0.00,
                                                            "transactions": []
                                                            }}, action){
    
    switch (action.type) {
        case 'login':
            return {
                ...state,
                response: action.response
            }
        case 'loggedUser':
            return {
                ...state,
                account: action.account
            }
        default:
            return state;
    }
}
