import React from 'react';
import { Text, View, FlatList } from 'react-native';

import { Background } from '../../components/Background';
import { Header } from '../../components/Header';

import './styles';

export function AppointmentDetails() {
  return (
    <Background>
      <Header
        title="Detalhes"
      />
    </Background>
  );
}