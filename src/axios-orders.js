import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-bf6f0.firebaseio.com/'
});

export default instance;