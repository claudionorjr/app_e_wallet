import { TransactionsObject } from './TransactionsObject'

export interface AccountObject {
  accountBank: string;
  agency: string;
  amount: number;
  email: string;
  id: number;
  name: string;
  password: string;
  phone: string;
  transactions: [
    TransactionsObject
  ]
}
