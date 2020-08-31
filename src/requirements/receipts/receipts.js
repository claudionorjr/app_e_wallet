let date = new Date()
export const paymentReceipts = (value) => `Foi feito um pagamento de ${parseFloat(value)}, Data: ${date.getDate()}-${(date.getMonth()) + 1}-${date.getFullYear()}`
export const depositReceipts = (value) => `Foi feito um Deposito de ${parseFloat(value)}, Data: ${date.getDate()}-${(date.getMonth()) + 1}-${date.getFullYear()}`