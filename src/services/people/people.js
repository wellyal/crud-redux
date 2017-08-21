import axios from 'axios'
const BASE_URL = 'http://swapi.co/api'

const people = () => axios.get(`${BASE_URL}/people/1/`)

export default { people }