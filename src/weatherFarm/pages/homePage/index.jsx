import React from 'react';

import { useState } from 'react';

import { Container } from "../../../class-component/native-component/styles";
import { Image, Text, TextInput, TouchableOpacity, ImageBackground, View, Button } from "react-native"

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

        <ImageBackground source={require('./assets/img/backgroundIMG.png')}
        style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            gap: 50,
        }}>

           <View style={{
            display: 'flex',
            flexDirection: 'row',
           }}>
                <TextInput 
                    placeholder="Search Location" 
                    onChangeText={handleSetCity}
                    value={city}
                    style={{
                        backgroundColor: '#9d9d9d',
                        width: 200,
                        height: 30,
                        borderRadius: 5,     
                    }}
                ></TextInput>
                <Button 
                onPress={getData}
                title='Aqui'
                > 
                    <Image 
                    source={require('./assets/img/Vector.png')}
                    style={{
                        width: 20,
                        height: 20,
                        marginRight: 10,
                    }}/> 
                 </Button>
           </View>
           <View>
                    <Text style={{
                        fontSize: 30,
                        color: 'white',
                        fontWeight: 500
                    }}>{city}</Text>
                <Text style={{
                    fontSize: 100,
                    color: 'white',
                    fontWeight: 800,
                }}>{data.temperature}</Text>
           </View>



                {/* <Image source={require('../homePage/assets/img/iconSunMin.png')} /> */}
        </ImageBackground>
    )
}