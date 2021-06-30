import React from 'react';
import { Image, View } from 'react-native';

import { styles } from './styles';

export function GuildIcon() {
  const uri = 'https://github.com/yurischulz.png';

  return (
    <View style={styles.container}>
      <Image
        source={{ uri }}
        style={styles.image}
        resizeMode="cover"
      />
    </View>
  );
}