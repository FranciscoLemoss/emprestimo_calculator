import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from '../styles/FormStyles';
import LeanResults from './LeanResults';

export default function Form() {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [totalAmount, setTotalAmount] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState('');

  const calculateLoan = () => {
    const loanAmountValue = parseFloat(loanAmount.replace('R$ ', '').replace(',', '.'));
    const interestRateValue = parseFloat(interestRate.replace('%', '').replace(',', '.'));
    const loanTermValue = parseInt(loanTerm);

    const totalAmountValue = loanAmountValue + loanAmountValue * (interestRateValue / 100) * loanTermValue;
    const monthlyPaymentValue = totalAmountValue / loanTermValue;

    setTotalAmount('R$ ' + totalAmountValue.toFixed(2).replace('.', ','));
    setMonthlyPayment('R$ ' + monthlyPaymentValue.toFixed(2).replace('.', ','));
  };

  const clearInputs = () => {
    setLoanAmount('');
    setInterestRate('');
    setLoanTerm('');
    setTotalAmount('');
    setMonthlyPayment('');
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Valor a emprestar (R$)"
        keyboardType="numeric"
        value={loanAmount}
        onChangeText={(text) => setLoanAmount(text)}
      />
      <View style={styles.inputRow}>
        <TextInput
          style={styles.inputHalf}
          placeholder="Taxa de juros mensal (%)"
          keyboardType="numeric"
          value={interestRate}
          onChangeText={(text) => setInterestRate(text)}
        />
        <TextInput
          style={styles.inputHalf}
          placeholder="Quant. de meses/parcelas"
          keyboardType="numeric"
          value={loanTerm}
          onChangeText={(text) => setLoanTerm(text)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="CALCULAR" onPress={calculateLoan} />
        </View>
        <View style={styles.button}>
          <Button title="LIMPAR" onPress={clearInputs} />
        </View>
      </View>
      <LeanResults totalAmount={totalAmount} monthlyPayment={monthlyPayment} />
    </View>
  );
}
