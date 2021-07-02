import { useState } from "react";
import { GuildProps } from '../components/GuildItem';

type Props = {
  guildSelect: string;
  category: string;
  setCategory: Function;
}

export function useAppointmentCreate({ guildSelect, category, setCategory }: Props) {
  const [openGuildsModal, setOpenGuildsModal] = useState(false);
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

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

  return { openGuildsModal, setOpenGuildsModal, guild, setGuild, handleOpenGuilds, handleCloseGuilds, handleGuildSelect, handleCategorySelected }
}