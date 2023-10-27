import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/HeaderStyles';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>EMPRESTIMUS CALCULATOR TABAJARA</Text>
    </View>
  );
}
