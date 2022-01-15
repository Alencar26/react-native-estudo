import axios from 'axios';

// https://api.currconv.com/api/v7/convert?q=USD_PHP,PHP_USD&compact=ultra&apiKey=YOUR_API_KEY

const api = axios.create({
    baseUrl: 'https://sujeitoprogramador.com/'
});

export default api;
