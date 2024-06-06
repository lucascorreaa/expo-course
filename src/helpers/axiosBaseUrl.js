import axios  from "axios";

const baseURL = 'https://api.openweathermap.org/data/2.5';

const baseRequest = axios.create({
  baseURL: baseURL,
  timeout: 10000, 
  headers: {
    'Content-Type': 'application/json',
  }
});

// export default baseRequest;
module.exports = baseRequest;