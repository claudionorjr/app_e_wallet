import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

interface Props {
  icon: IconProp;
  size: number;
  selected: boolean;
  selectedColor: string;
  NoSelectedColor: string;
}

const IconNavigation: React.FC<Props> = ({ icon, NoSelectedColor, size, selected, selectedColor }) => {
  return (
    selected ?
      (<FontAwesomeIcon icon={icon} color={selectedColor} size={size} />)
      :
      (<FontAwesomeIcon icon={icon} color={NoSelectedColor} size={size} />)
  )
}

export default IconNavigation;
