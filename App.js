import { ScrollView } from 'react-native';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import styles from './style/style';
import Gameboard from './components/Gameboard';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <Gameboard />
      <Footer />
    </ScrollView>
  );
}

