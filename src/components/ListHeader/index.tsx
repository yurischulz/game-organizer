import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';

type Props = {
  title: string | undefined;
  subtitle: string | undefined;
  isForm?: boolean;
}

export function ListHeader({ title, subtitle, isForm = false }: Props) {
  return (
    <View style={[styles.container,
    isForm ? { marginTop: 32, marginBottom: 16 } : { marginVertical: 32 }
    ]}>
      <Text style={styles.title}>
        {title}
      </Text>
      <Text style={styles.subtitle}>
        {subtitle}
      </Text>
    </View>
  );
}