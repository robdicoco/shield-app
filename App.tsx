import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Home } from './src/screens/Home/Home';
import { Contact } from './src/screens/Contact/Contact';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<'home' | 'contact'>('home');

  const handleNavigateToContact = () => {
    setCurrentScreen('contact');
  };

  const handleReturnToHome = () => {
    setCurrentScreen('home');
  };

  return (
    <>
      <StatusBar style="light" />
      {currentScreen === 'home' ? (
        <Home onNavigateToContact={handleNavigateToContact} />
      ) : (
        <Contact onReturn={handleReturnToHome} />
      )}
    </>
  );
}

