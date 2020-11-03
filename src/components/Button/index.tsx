import React from 'react'

import { Container, ButtonText } from './styles'

interface Props {
  onPress: () => void;
  text: string;
  disabled?: boolean;
}

const Button: React.FC<Props> = ({ onPress, text, disabled }) => {
  return (
    <Container disabled={disabled} onPress={onPress}>
      <ButtonText>{text}</ButtonText>
    </Container>
  )
}

export default Button
