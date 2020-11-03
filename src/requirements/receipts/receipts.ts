let date = new Date()
export const paymentReceipts = (value) => `
Foi feito um pagamento de R$ ${parseFloat(value)},
Data: ${date.getDate()}-${(date.getMonth()) + 1}-${date.getFullYear()}.
`

export const depositReceipts = (value) => `
Foi feito um Deposito de R$ ${parseFloat(value)},
Data: ${date.getDate()}-${(date.getMonth()) + 1}-${date.getFullYear()}.
`

export const transferReceipts = (value, document) => `
Foi feito uma Transferência de R$ ${parseFloat(value)},
Data: ${date.getDate()}-${(date.getMonth()) + 1}-${date.getFullYear()},
Para o Documento: ${document}.
`
