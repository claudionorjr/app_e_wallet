const checkAmount = (transactionAmount, amountInAccount): boolean => {
  return transactionAmount < amountInAccount ? true : false
}

export default checkAmount
