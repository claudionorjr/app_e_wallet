import React from 'react'

import { Text } from './styles'

interface Props {
  text: string;
  color?: string;
  padding?: number;
  marginLeft?: number;
}

const MediumText: React.FC<Props> = ({ text, color, padding, marginLeft }) => {
  return (
    <Text style={{ color: color, padding: padding, marginLeft: marginLeft }}>{text}</Text>
  )
}

export default MediumText
