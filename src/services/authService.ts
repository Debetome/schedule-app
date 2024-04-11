import axios from 'axios';

const BASE_URL = 'http://localhost:4000';

export default axios.create({
    baseURL: BASE_URL
});

export const axiosAuth = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});