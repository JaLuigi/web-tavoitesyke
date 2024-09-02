import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  const [age, setAge] = useState('');
  const [lowerLimit, setLowerLimit] = useState(null);
  const [upperlimit, setUpperLimit] = useState(null);

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
      <Button title='calculate' onPress = {calculate}/>
      {lowerLimit && upperlimit && (
        <View style={styles.results}>
          <Text>Lower Limit: {lowerLimit} bpm</Text>
          <Text>Upper Limit: {upperlimit} bpm</Text>
        </View>
      )}
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
});
