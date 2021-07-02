import React from 'react'
import { Text, TextInput, TextInputProps, View } from 'react-native'
import { styles } from './styles'

type Props = TextInputProps & {
  title: string;
  divider: string;
}

export function DividedInput({ title, divider, ...rest }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {title}
      </Text>

      <View style={styles.inputGroup}>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          maxLength={2}
          {...rest}
        />
        <Text style={styles.divider}>
          {divider}
        </Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          maxLength={2}
          {...rest}
        />
      </View>
    </View>
  )
}