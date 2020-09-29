import React from 'react';

import { Text } from './styles';

interface Props {
  text: string;
  color?: string;
}

const BigText: React.FC<Props> = ({ text, color }) => {
  return (
    <Text style={{ color: color }}>{text}</Text>
  );
};

export default BigText;
