import React from 'react';

import {Title, ViewButton} from './styles';

interface Props {
  title: string;
  onPress: () => void;
}
export const Button = ({title, onPress, ...rest}: Props) => {
  return (
    <ViewButton {...rest} onPress={onPress}>
      <Title>{title}</Title>
    </ViewButton>
  );
};
