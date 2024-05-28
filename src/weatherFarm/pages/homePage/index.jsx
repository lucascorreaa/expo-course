import React from 'react';

import { useState } from 'react';

import { Container } from "../../../class-component/native-component/styles";
import { Image, Text, TextInput, TouchableOpacity } from "react-native"

export default function HomePage(){

   const [city, setCity] = useState('São Paulo');
   const [data, setData] = useState({
    temp: '19ºC'
   });

   const getData = async () => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=pt_br&appid=f5f865ff13ae9828564399051f651125&units=metric`);
      const json = await response.json();
      setData({
        temperature: json.main.temp
    });
    } catch (error) {
      console.error(error);
    }
  };

  const handleSetCity = (updateCity) => {
    setCity(updateCity);
  }


    return(
        <Container style={{
            backgroundColor: 'blue',
        }}>
            <TextInput 
                placeholder="Search Location" 
                onChangeText={handleSetCity}
                value={city}
                style={{
                    backgroundColor: '#9d9d9d',
                    width: 200,
                    height: 30,
                }}
            ></TextInput>

            <TouchableOpacity onPress={getData}><Text>Click aqui</Text></TouchableOpacity>
            <Text>{data.temperature}</Text>
            <Image source={require('../homePage/assets/img/iconSunMin.png')} />
 
        </Container>
    )
}