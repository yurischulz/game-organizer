import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';

type Props = {
  title: string | undefined;
  subtitle: string | undefined;
}

export function ListHeader({ title, subtitle }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {title}
      </Text>
      <Text style={styles.subtitle}>
        {subtitle}
      </Text>
    </View>
  );
}