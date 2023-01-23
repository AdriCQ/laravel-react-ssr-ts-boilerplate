import axios, { AxiosRequestHeaders } from 'axios';
import reduxStore from '../redux';

const baseURL = window.location.origin;

const api = axios.create({
    baseURL: `${baseURL}`,
    withCredentials: true,
});

api.interceptors.request.use(req => {
    const { user } = reduxStore.getState();

    if (!(req.headers as AxiosRequestHeaders)['Content-Type']) {
        (req.headers as AxiosRequestHeaders)['Content-Type'] =
            'application/json';
    }
    if (user.token) {
        const token = user.token;
        /* Check if authorization is set */
        if (!(req.headers as AxiosRequestHeaders)['Authorization']) {
            if (token && token.length > 0) {
                (req.headers as AxiosRequestHeaders).Authorization =
                    'Bearer ' + token;
            }
        }
    }
    return req;
})

const csrf = () => api.get('/sanctum/csrf-cookie');


export { api, baseURL, csrf }
