import { transactionsObject } from './transactionsObject'

export interface accountObject {
  accountBank: string;
  agency: string;
  amount: number;
  email: string;
  id: number;
  name: string;
  password: string;
  phone: string;
  transactions: [
    transactionsObject
  ]
}
