import api from './axios.js';

const getFriends = async () => {
    return await api.get('/users/');
};

const createFriend = async (data) => {
    return await api.post('/users/', data);
};

const updateFriend = async (id, data) => {
    return await api.put(`/users/${id}/`, data);
};

const removeFriend = async (id) => {
    return await api.delete(`/users/${id}/`);
};

const postDraw = async () => {
    return await api.post('/draw/');
}

const service = {
    getFriends,
    createFriend,
    updateFriend,
    removeFriend,
    postDraw
};

export default service;