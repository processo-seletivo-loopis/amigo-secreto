import api from './axios.js';

const getFriends = () => {
    return api.get('/users/');
};

const createFriend = (data) => {
    return api.post('/users/', data);
};

const updateFriend = (id, data) => {
    return api.put(`/users/${id}/`, data);
};

const removeFriend = (id) => {
    return api.delete(`/users/${id}/`);
};

const getDraw = () => {
    return api.get('/draw/');
}

const service = {
    getFriends,
    createFriend,
    updateFriend,
    removeFriend,
    getDraw
};

export default service;