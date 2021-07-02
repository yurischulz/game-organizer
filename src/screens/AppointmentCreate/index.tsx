import React, { useState } from 'react';
import { Text, TextInput, View, ScrollView, Platform, KeyboardAvoidingView } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import { Background } from '../../components/Background';
import { ButtonIcon } from '../../components/ButtonIcon';
import { DividedInput } from '../../components/DividedInput';
import { CategoryCarousel } from '../../components/CategoryCarousel';
import { GuildIcon } from '../../components/GuildIcon';
import { GuildProps } from '../../components/GuildItem';
import { Header } from '../../components/Header';
import { ListHeader } from '../../components/ListHeader';
import { ModalView } from '../../components/ModalView';

import { Guilds } from '../Guilds'

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

export function AppointmentCreate() {
  const [category, setCategory] = useState('');
  const [openGuildsModal, setOpenGuildsModal] = useState(false);
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps)

  const handleOpenGuilds = () => {
    setOpenGuildsModal(true);
  }

  const handleCloseGuilds = () => {
    setOpenGuildsModal(false);
  }

  const handleGuildSelect = (guildSelect: GuildProps) => {
    setGuild(guildSelect);
    setOpenGuildsModal(false);
  }

  function handleCategorySelected(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView>
        <Background>
          <Header
            title="Agendar partida"
          />

          <Text style={[styles.label, {
            paddingHorizontal: 24,
            marginTop: 32,
            marginBottom: 16,
          }]}>
            Categoria
          </Text>

          <CategoryCarousel
            categorySelected={category}
            setCategory={handleCategorySelected}
            hasCheckBox
          />

          <View style={styles.form}>
            <RectButton onPress={handleOpenGuilds}>
              <View style={styles.select}>
                {guild.icon
                  ? <GuildIcon guildId={guild.id} iconId={guild.icon} />
                  : <View style={styles.serverImage} />
                }

                <View style={styles.selectBody}>
                  <Text style={styles.label}>
                    {guild.name ? guild.name : 'Select a server'}
                  </Text>
                </View>

                <Feather
                  name="chevron-right"
                  color={theme.colors.heading}
                  size={18}
                />
              </View>
            </RectButton>

            <View style={styles.DividedInputContainer}>
              <DividedInput
                title="Dia e mês"
                divider="/"
              />

              <DividedInput
                title="Hora e minuto"
                divider=":"
              />
            </View>

            <ListHeader
              title="Descrição"
              subtitle="Max 300 caracteres"
              isForm
            />

            <TextInput
              style={styles.textarea}
              multiline
              maxLength={100}
              numberOfLines={5}
              autoCorrect={false}
            />

            <View style={styles.footer}>
              <ButtonIcon
                title="Agendar"
              />
            </View>
          </View>
        </Background>
      </ScrollView>

      <ModalView visible={openGuildsModal} closeModal={handleCloseGuilds}>
        <Guilds handleGuildSelect={handleGuildSelect} />
      </ModalView>
    </KeyboardAvoidingView>
  );
}