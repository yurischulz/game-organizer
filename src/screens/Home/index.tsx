import React, { useState } from 'react';
import { Text, View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Appointments, AppointmentProps } from '../../components/Appointments'
import { Background } from '../../components/Background';
import { ButtonIcon } from '../../components/ButtonIcon';
import { CategoryCarousel } from '../../components/CategoryCarousel';
import { ListDivider } from '../../components/ListDivider';
import { ListHeader } from '../../components/ListHeader';
import { Profile } from '../../components/Profile';

import { styles } from './styles';

export function Home() {
  const [category, setCategory] = useState('');
  const navigation = useNavigation();

  const appointments = [{
    id: '1',
    guild: {
      id: '1',
      name: 'Lendários',
      icon: null,
      owner: true
    },
    category: '1',
    date: '22/06 às 20:40h',
    description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
  },
  {
    id: '2',
    guild: {
      id: '1',
      name: 'Lendários',
      icon: null,
      owner: true
    },
    category: '1',
    date: '22/06 às 20:40h',
    description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
  }];

  function handleCategorySelected(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  const handleAppointmentDetails = (guildSelected: AppointmentProps) => {
    navigation.navigate('AppointmentDetails', { guildSelected })
  }

  const handleAppointmentCreate = () => {
    navigation.navigate('AppointmentCreate')
  }

  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonIcon
          icon="plus"
          onPress={handleAppointmentCreate}
        />
      </View>

      <CategoryCarousel
        categorySelected={category}
        setCategory={handleCategorySelected}
      />

      <View style={styles.content}>
        <ListHeader
          title="Partidas agendadas"
          subtitle={`Total 6`}
        />

        <FlatList
          data={appointments}
          keyExtractor={item => item.id}
          style={styles.matches}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <ListDivider />}
          renderItem={({ item }) => (
            <Appointments
              data={item}
              onPress={() => handleAppointmentDetails(item)}
            />
          )}
        />
      </View>
    </Background>
  );
}