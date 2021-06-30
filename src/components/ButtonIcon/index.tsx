import React from 'react';
import {
  Text,
  Image,
  View,
  ImageSourcePropType
} from 'react-native';

import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type Props = RectButtonProps & {
  title?: string | undefined;
  icon?: any | undefined;
}

export function ButtonIcon({ title, icon, ...rest }: Props) {
  return (
    <RectButton
      style={title !== undefined ? styles.container : styles.IconContainer}
      {...rest}
    >
      {icon !== undefined &&
        <View style={title !== undefined ? styles.iconWrapper : {}}>
          <MaterialCommunityIcons
            name={icon}
            color={theme.colors.heading}
            size={24}
          />
        </View>
      }

      {title !== undefined &&
        <Text style={styles.title}>{title}</Text>
      }
    </RectButton>
  );
}