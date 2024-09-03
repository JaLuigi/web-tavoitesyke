import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  const [age, setAge] = useState('');
  const [lowerLimit, setLowerLimit] = useState(null);
  const [upperLimit, setUpperLimit] = useState(null);

  const calculate = () => {
    const ageNumber = parseInt(age);

    const lower = (220 - age) * 0.65;
    const upper = (220 - age) * 0.85;

    setLowerLimit(lower.toFixed(2));
    setUpperLimit(upper.toFixed(2));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Heart Rate Limits Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Age"
        keyboardType="numeric"
        value={age}
        onChangeText={setAge}
      />
      {lowerLimit !== null && upperLimit !== null && (
        <View style={styles.results}>
          <Text>Limits</Text>
          <Text>{lowerLimit} - {upperLimit}</Text>
        </View>
      )}
      <Button title="Calculate" onPress={calculate}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 20,
    marginBottom: 20,
  },

  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    width: '60%',
    marginBottom: 20,
    paddingLeft: 8,
  },
  results: {
    marginTop: 20,
  },
});
