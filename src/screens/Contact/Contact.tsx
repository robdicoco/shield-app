import React from 'react';
import { View, ImageBackground, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ContactForm } from '../../components/ContactForm';
import { ReturnButton } from '../../components/ReturnButton';
import { styles } from './ContactStyles';
import shieldLogo from '../../../assets/shield_1.png';

interface ContactProps {
  onReturn: () => void;
}

export function Contact({ onReturn }: ContactProps) {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      {/* Background Shield Image */}
      <ImageBackground
        source={shieldLogo}
        style={styles.backgroundImage}
        imageStyle={styles.backgroundImageStyle}
      >
        {/* Overlay for better readability */}
        <View style={styles.overlay} />
        
        {/* Return Button */}
        <View style={styles.header}>
          <ReturnButton onPress={onReturn} />
        </View>
        
        {/* Contact Form */}
        <ContactForm />
      </ImageBackground>
    </View>
  );
} 