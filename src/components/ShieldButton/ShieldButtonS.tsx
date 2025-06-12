import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import { styles } from './ShieldButtonStyles';
import shieldLogo from '../../../assets/shield_1.png';

interface ShieldButtonProps {
  tintColor?: string;
  onPress?: () => void;
}

export function ShieldButton({ tintColor, onPress }: ShieldButtonProps) {
  const handlePress = () => {
    if (onPress) {
      onPress();
    } else {
      console.log('Shield Corp Support');
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={handlePress}>
        <Image 
          source={shieldLogo} 
          style={[styles.image, tintColor ? { tintColor } : undefined]} 
        />
      </TouchableOpacity>
    </View>
  );
}