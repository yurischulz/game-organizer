import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { GuildItem, GuildProps } from '../../components/GuildItem';
// import { Load } from '../../components/Load/index';
import { ListDivider } from '../../components/ListDivider';
import { styles } from './styles';

type Props = {
  handleGuildSelect: (guild: GuildProps) => void;
}

export function Guilds({ handleGuildSelect }: Props) {
  const guilds = [{
    id: '1',
    name: 'Lendários',
    icon: 'https://github.com/yurischulz.png',
    owner: true
  },
  {
    id: '2',
    name: 'Legendários',
    icon: 'https://github.com/yurischulz.png',
    owner: true
  }];

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.guilds}
        data={guilds}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (<GuildItem data={item} onPress={() => handleGuildSelect(item)} />)}
        ItemSeparatorComponent={() => <ListDivider isModal isCentered />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}