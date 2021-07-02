import React from 'react';
import { ImageBackground, FlatList, Text, View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons'

import { Background } from '../../components/Background';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Header } from '../../components/Header';
import { ListDivider } from '../../components/ListDivider';
import { ListHeader } from '../../components/ListHeader';
import { Players } from '../../components/Players';

import BannerImg from '../../assets/banner.png';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

export function AppointmentDetails() {
  const players = [{
    id: '1',
    username: 'Yuri',
    avatar: 'https://github.com/yurischulz.png',
    status: 'online'
  },
  {
    id: '2',
    username: 'Yuri',
    avatar: 'https://github.com/yurischulz.png',
    status: 'offline'
  }];

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <MaterialIcons
              name="share"
              size={24}
              color={theme.colors.primary}
            />
          </BorderlessButton>
        }
      />

      <ImageBackground
        source={BannerImg}
        style={styles.banner}
      >
        <View style={styles.bannerContent}>
          <Text style={styles.title}>
            Lendários
          </Text>
          <Text style={styles.subtitle}>
            É hoje que vamos chegar ao challenger sem perder uma partida da md10
          </Text>
        </View>
      </ImageBackground>

      <View style={styles.container}>
        <ListHeader
          title="Jogadores"
          subtitle={`Total 3`}
        />

        <FlatList
          data={players}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <ListDivider isAvatar={true} isCentered={true} />}
          renderItem={({ item }) => (
            <Players
              data={item}
            // onPress={() => handleAppointmentDetails(item)}
            />
          )}
        />

        <View style={styles.footer}>
          <ButtonIcon
            title="Entrar na partida"
            icon="discord"
          />
        </View>
      </View>
    </Background>
  );
}