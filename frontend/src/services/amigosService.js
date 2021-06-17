import api from './axios.js';

const get = () => {
    return api.get('/amigo');
};

const create = (data) => {
    return api.post('/amigo', data);
};

const update = (id, data) => {
    return api.put(`/amigo/${id}`, data);
};

const remove = (id) => {
    return api.delete(`/amigo/${id}`);
};

const sortear = () => {
    return api.get('/sorteio')
}


export default {
    get,
    create,
    update,
    remove
};