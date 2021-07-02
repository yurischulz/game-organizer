import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Text, View } from 'react-native';

import { Avatar } from '../Avatar';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

export type PlayersProps = {
  id: string;
  username: string;
  avatar: string;
  status: string;
}

type Props = RectButtonProps & {
  data: PlayersProps;
}

export function Players({ data, ...rest }: Props) {
  const isOnline = data.status === "online";
  const { on, primary } = theme.colors;

  return (
    <View style={styles.container}>
      <Avatar urlImage={data.avatar} />

      <View>
        <Text style={styles.title}>
          {data.username}
        </Text>

        <View style={styles.status}>
          <View style={[
            styles.bulletStatus, {
              backgroundColor: isOnline ? on : primary
            }
          ]} />
          <Text style={styles.statusName}>
            {isOnline ? 'Disponível' : 'Ocupado'}
          </Text>
        </View>
      </View>
    </View>
  );
}