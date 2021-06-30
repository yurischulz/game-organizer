import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, View } from 'react-native';
import { SvgProps } from 'react-native-svg';


import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type Props = RectButtonProps & {
  icon: React.FC<SvgProps>;
  title: string;
  checked?: boolean;
  hasCheckBox?: boolean;
}

export function Category({
  icon: Icon,
  title,
  checked = false,
  hasCheckBox = false,
  ...rest
}: Props) {
  const { secondary40, secondary75 } = theme.colors;

  return (
    <RectButton
      style={styles.container}
      {...rest}
    >
      <LinearGradient
        style={styles.gradient}
        colors={[secondary75, secondary40]}
      >
        {hasCheckBox &&
          <View style={checked ? styles.checked : styles.check} />
        }
        <View style={[styles.content, { opacity: checked ? 1 : 0.5 }]}>
          <Icon
            width={48}
            height={48}
          />
          <Text style={styles.title}>
            {title}
          </Text>
        </View>
      </LinearGradient>
    </RectButton>
  );
}