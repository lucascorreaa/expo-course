import React from 'react';
import { View } from 'react-native';
import { getWeatherByCity } from './src/helpers/weatherRequest';  

export default function App() {
  // Chama a função do helper onde for necessário, como dentro de uma função de ciclo de vida ou em resposta a um evento
  const data = getWeatherByCity('São paulo')

  return (
    <View style={{backgroundColor: '#000'}}>
      <p style={{color: 'green'}}>`temperatura: ${data.temp}`</p>
    </View>
  );
}