import React from 'react';

import { useState } from 'react';

import { Image, Text, TextInput, ImageBackground, View, Button } from "react-native"


export default function HomePage(){

    const minutes = new Date().getMinutes();

    const day = new Date().getDay();

    const dayWeek = [ 'Dom', 'Seg', 'Ter', 'Quar', 'Qui', 'Sex', 'Sab'];


   const [city, setCity] = useState('São Paulo');
   const [data, setData] = useState({
    temp: ''
   });

   const [hours, setHours] = useState(new Date().getHours());

   



   const getData = async () => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=pt_br&appid=f5f865ff13ae9828564399051f651125&units=metric`);
      const json = await response.json();
      setData({
        temperature: ((json.main.temp % 1 >= 0.5) ? Math.ceil(json.main.temp) + 'º' : Math.floor(json.main.temp) + 'º')
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
                            <Image 
                                source={require('../homePage/assets/img/iconSunMin.png')}
                                style={{
                                    width: 300,
                                    height: 300,
                                    marginRight: 10,
                                }}
                            />
                <View style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                            <Text style={{
                                fontSize: 30,
                                color: 'white',
                                fontWeight: 500,
                            }}>{city}</Text>

                            <View style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <Text style={{
                                    fontSize: 60,
                                    color: 'white',
                                }}>--------------</Text>


                                <View style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    gap: 20,
                                }}>

                                    <Text style={{
                                        fontSize: 90,
                                        color: 'white',
                                        fontWeight: 800,
                                    }}>{data.temperature}</Text>


                                    <View style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                        <Text style={{
                                            fontSize: 35,
                                            color: 'white',
                                            fontWeight: 800,
                                        }}>{dayWeek[day]}</Text>
                                        <Text style={{
                                            fontSize: 25,
                                            color: 'white',
                                            fontWeight: 800,
                                        }}>{hours}h{minutes}m</Text>
                                    </View>


                                </View>












                            <Text style={{
                                    fontSize: 60,
                                    color: 'white',
                                }}>--------------</Text>

                            </View>



                </View>




        </ImageBackground>
    )
}