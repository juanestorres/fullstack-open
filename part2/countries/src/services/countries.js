import axios from 'axios'
const baseUrl = 'https://restcountries.com/v3.1/'

const getAllFromName = (name) => {
    const request = axios.get(`${baseUrl}name/${name}`)
    return request.then(response => response.data)
}

const getAll = () => {
    const request = axios.get(`${baseUrl}all`)
    return request.then(response => response.data)
}

const services = {getAllFromName, getAll};

export default services