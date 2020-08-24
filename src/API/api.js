import axios from 'axios';
import Cookies from 'js-cookie';

const devURL = 'http://localhost:5000/api';
const prodURL = 'https://rocky-inlet-34170.herokuapp.com/api/';


let params = {
    baseURL: devURL,
    headers: {
        'Authorization': 'bearer ' + (Cookies.get('token') || sessionStorage.getItem('token')),
        'Content-Type': 'application/json, multipart/form-data',
    }
};

let instance = axios.create({...params});

export const AuthAPI = {
    async registerAuth(
        username,
        email,
        phone,
        password,
        confirm_password
    ) {
        return await axios.post('http://localhost:5000/api/auth/register', {
            username,
            email,
            phone,
            password,
            confirm_password
        });
        // return await instance.post('auth/register', {username, email, phone, password, confirm_password});
    },

    async loginAuth(email, password) {
        return await axios.post('http://localhost:5000/api/auth/login', {email, password});
        // return await instance.post('auth/login', {email, password});
    },


    async meAuth() {
        return await instance.get('auth/me');
    },

    async forgotAuth(email) {
        return await axios.post('http://localhost:5000/api/forgot/reset', {email});
        // return await instance.post('auth/login', {email, password});
    },

    async codeselectAuth (token) {
        return await axios.post('http://localhost:5000/api/forgot/code', {token});
        // return await instance.post('auth/login', {email, password});
    },

    async forgotpasswordAuth(
        password,
        confirm_password,
        userId,
        token) {
        return await axios.post('http://localhost:5000/api/forgot/password', {
            password,
            confirm_password,
            userId,
            token
        });
        // return await instance.post('auth/login', {email, password});
    },
};

// // // // // UPDATE PARAMS // // // // //

export function updateToken({value}) {
    instance = axios.create({
        ...params,
        headers: {
            ...params.headers,
            'Authorization': 'bearer ' + value
        }
    });
}
