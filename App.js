import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { getWeatherByCity } from './src/helpers/weatherRequest';

export default function App() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getWeatherByCity('São Paulo');
      setWeatherData(data);
      console.log(weatherData[0].temp)
    }

    fetchData();
  }, []);

  return (
    <View style={{ backgroundColor: '#000', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {weatherData ? (
        <Text style={{ color: 'green' }}>Temperatura: {weatherData[0].temp}</Text>
      ) : (
        <Text style={{ color: 'white' }}>Carregando...</Text>
      )}
    </View>
  );
}