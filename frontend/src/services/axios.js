import axios from 'axios';
//Configurando o cliente HTTP
const BASE_URL = 'http://localhost:8000/api'
const api = axios.create({ baseURL: BASE_URL });

export default api;