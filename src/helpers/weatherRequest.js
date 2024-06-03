// import baseRequest from './axiosBaseUrl'; 
const { useState } = require('react');
const baseRequest = require('./axiosBaseUrl');
require('dotenv').config();

const apiKey = process.env.API_KEY;
export async function getWeatherByCity(city) {
    try {
        const response = await baseRequest.get('/weather', {
            params: {
                q: city, 
                appid: apiKey,
                units:'metric'
            }
        });
        
        console.log(response.data);
        return dataObject = [
            {temp: response.data.main.temp},
            {feels_like: response.data.main.feels_like},
            {humidity: response.data.main.humidity},
            {pressure: response.data.main.pressure}

        ]
        
    } catch (error) {
        console.error('Erro ao fazer requisição:', error);
        throw error;
    }
}

// async function main() {
//     try {
//         const city = 'Rio de Janeiro'; 
//         const data = await getWeatherByCity(city);  
//         console.log(data);
//     } catch (error) {
//         console.error('Erro ao obter dados do clima:', error);
//     }
// }

// main();