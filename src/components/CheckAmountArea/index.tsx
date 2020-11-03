import React from "react"
import SmallText from "../SmallText"

interface Props {
  transactionAmount: string;
  amountInAccount: string;
}

const CheckAmountArea: React.FC<Props> = ({ transactionAmount, amountInAccount }) => {
  return (
    <>
      {
        Number(amountInAccount) < Number(transactionAmount) ?
          <SmallText text={`Saldo Insuficiente.`} color={"red"} />
          : null
      }
      <SmallText text={`Saldo Atual R$ ${amountInAccount}`} />
    </>
  )
}

export default CheckAmountArea
