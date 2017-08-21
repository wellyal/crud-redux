import axios from 'axios'

const HttpService = axios.create({
  baseURL: 'http://swapi.co/api'
})

export default HttpService