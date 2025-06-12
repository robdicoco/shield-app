import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import { styles } from './HomeStyles';
import { ShieldButton } from '../../components/ShieldButton/ShieldButtonS';

interface HomeProps {
  onNavigateToContact: () => void;
}

export function Home({ onNavigateToContact }: HomeProps) {
  const [logoColor, setLogoColor] = useState<string | undefined>(undefined);

  const handleCopy = () => {
    setLogoColor('#E5BF3D');
    setTimeout(() => {
      setLogoColor(undefined);
    }, 1000);
  };

  return (
    <View style={styles.appContainer}>
      <StatusBar style="light" />
      <ShieldButton tintColor={logoColor} onPress={onNavigateToContact} />
    </View>
  );
}