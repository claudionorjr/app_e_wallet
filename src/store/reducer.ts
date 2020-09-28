import { loggedUser } from '../requirements/Login/auth'

export default function reducer(
  state = {
    response: false,
    account:
    {
      "id": 0,
      "email": "",
      "password": "",
      "phone": "",
      "name": '',
      "accountBank": "",
      "agency": "",
      "amount": 0.00,
      "transactions": []
    },
    deposit: '',
    errorMessage: ''
  },
  action
) {

  const id = (state.account.transactions.length) + 1
  const date = new Date()
  const dateFormat = `${date.getDate()}-${(date.getMonth()) + 1}-${date.getFullYear()}`

  switch (action.type) {
    case 'login':
      let accountLoggedUser = loggedUser()
      return {
        ...state,
        account: accountLoggedUser,
        response: action.response
      }
    case 'validate/deposit':
      let deposit = parseFloat(action.deposit)
      let amount = state.account.amount + deposit
      let transaction = { "transaction_id": id, "documentReceiver": '', "description": "Depósito", "date": dateFormat, "value": action.deposit }
      let transactions = [transaction, ...state.account.transactions]
      let account = { ...state.account, amount, transactions }
      return {
        ...state,
        account: account
      }
    case 'validate/payment':
      let payment = parseFloat(action.payment)
      amount = state.account.amount - payment
      transaction = { "transaction_id": id, "documentReceiver": '', "description": "Pagamento", "date": dateFormat, "value": action.payment }
      transactions = [transaction, ...state.account.transactions]
      account = { ...state.account, amount, transactions }
      return {
        ...state,
        account: account
      }
    case 'validate/transfer':
      amount = (state.account.amount - action.transferAmount)
      transaction = { "transaction_id": id, "documentReceiver": action.transferDocument, "description": "Transferência", "date": dateFormat, "value": action.transferAmount }
      transactions = [transaction, ...state.account.transactions]
      account = { ...state.account, amount, transactions }
      return {
        ...state,
        account: account
      }
    default:
      return state;
  }
}
