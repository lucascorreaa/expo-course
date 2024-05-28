// import baseRequest from './axiosBaseUrl'; 
const { useState } = require('react');
const baseRequest = require('./axiosBaseUrl');
require('dotenv').config();

const apiKey = process.env.API_KEY;
async function getWeatherByCity(city) {
    try {
        const response = await baseRequest.get('/weather', {
            params: {
                q: city, 
                appid: apiKey,
                units:'metric'
            }
        });
        
        console.log('Resposta da API:', response.data);
        return response.data;
    } catch (error) {
        console.error('Erro ao fazer requisição:', error);
        throw error;
    }
}

async function main() {
    try {
        const cidade = 'Rio de Janeiro'; 
        const data = await getWeatherByCity(cidade);  
        console.log('temp = ', data.main.temp);
    } catch (error) {
        console.error('Erro ao obter dados do clima:', error);
    }
}

main();