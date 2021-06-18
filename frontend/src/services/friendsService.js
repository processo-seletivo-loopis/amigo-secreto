import api from './axios.js';

const getFriends = () => {
    return api.get('/friend');
};

const createFriend = (data) => {
    return api.post('/friend', data);
};

const updateFriend = (id, data) => {
    return api.put(`/friend/${id}`, data);
};

const removeFriend = (id) => {
    return api.delete(`/friend/${id}`);
};

const getDraw = () => {
    return api.get('/draw');
}

const service = {
    getFriends,
    createFriend,
    updateFriend,
    removeFriend,
    getDraw
};

export default service;