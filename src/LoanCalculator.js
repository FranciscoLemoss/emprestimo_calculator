import React from 'react';
import { View } from 'react-native';
import Header from './components/Header';
import Form from './components/Form';
import LeanResults from './components/LeanResults';

export default function LoanCalculator() {
  return (
    <View style={{ flex: 1, backgroundColor: '#f5f5f5', padding: 16 }}>
      <Header />
      <Form />
    </View>
  );
}
