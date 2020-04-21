import axios from 'axios';

const api = axios.create({
    baseURL: 'https://json-web-server-rocketshoes.herokuapp.com',
});

export default api;
