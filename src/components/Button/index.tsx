import React from 'react'

import { Container, ButtonText } from './styles'

interface Props {
  onPress: () => void;
  text: string;
}

const Button: React.FC<Props> = ({ onPress, text }) => {
  return (
    <Container onPress={onPress}>
      <ButtonText>{text}</ButtonText>
    </Container>
  )
}

export default Button
