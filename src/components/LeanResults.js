import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/LeanResultsStyles';

export default function LeanResults({ totalAmount, monthlyPayment }) {
  return (
    <View style={styles.leanResults}>
      <Text style={styles.resultText}>Valor total do empréstimo: {totalAmount}</Text>
      <Text style={styles.resultText}>Valor da parcela: {monthlyPayment}</Text>
    </View>
  );
}
