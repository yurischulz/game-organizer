import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';

type Props = {
  isCentered?: boolean;
  isAvatar?: boolean;
  isModal?: boolean;
};

export function ListDivider({ isCentered = false, isAvatar = false, isModal = false }: Props) {
  return (
    <View style={[
      styles.container,
      isAvatar ? { width: "80%" } : isModal ? { width: "72%" } : { width: "76%" },
      isCentered ? { marginVertical: 12 } : { marginTop: 2, marginBottom: 31 },
    ]} />
  );
}