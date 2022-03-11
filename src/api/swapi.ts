import axios from 'axios'

export const swapi = axios.create({
    baseURL: process.env.REACT_APP_SWAPI_URL
})