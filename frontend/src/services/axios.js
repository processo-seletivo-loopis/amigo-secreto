import axios from 'axios';
//Configurando o cliente HTTP
const BASE_URL = 'httpAPIpython'
const api = axios.create({ baseURL: BASE_URL });

export default api;