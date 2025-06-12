import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './ReturnButtonStyles';

interface ReturnButtonProps {
  onPress: () => void;
}

export function ReturnButton({ onPress }: ReturnButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.icon}>←</Text>
      <Text style={styles.text}>Return</Text>
    </TouchableOpacity>
  );
} 