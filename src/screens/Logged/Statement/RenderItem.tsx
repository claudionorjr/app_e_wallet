import React from 'react'
import { faInfo, faDollarSign, faCalendarAlt, faExchangeAlt, faIdCard } from '@fortawesome/free-solid-svg-icons'

import Options from '../../../components/Options'
import { TransactionsObject } from '../../../@types/TransactionsObject'
import { StatementDaties } from './styles'

interface RenderItemProps {
  object: TransactionsObject;
}

const RenderItem: React.FC<RenderItemProps> = ({ object }) => {
  return (
    <StatementDaties>
      <Options text={`${object['transaction_id']}`} icon={faInfo} marginLeft={10} border={false} padding={5} />
      <Options text={`${object['description']}`} icon={faExchangeAlt} marginLeft={10} border={false} padding={5} />
      {
        object['description'] === 'Transferência' ?
          <Options text={`${object['documentReceiver']}`} icon={faIdCard} marginLeft={10} border={false} padding={5} />
          :
          null
      }
      <Options text={`${object['value'].toFixed(2)}`} icon={faDollarSign} marginLeft={10} border={false} padding={5} />
      <Options text={`${object['date']}`} icon={faCalendarAlt} marginLeft={10} border={false} padding={5} />
    </StatementDaties>
  )
}

export default RenderItem
