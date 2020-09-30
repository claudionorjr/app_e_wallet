import React from "react"

import { InputText } from './styles'

interface Props {
  defaultValue: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
}

const Input: React.FC<Props> = ({ defaultValue, onChangeText, placeholder, secureTextEntry }) => {
  return (
    <InputText
      defaultValue={defaultValue}
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
    />
  )
}

export default Input
