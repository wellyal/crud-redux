import HttpService from 'services/HttpService'

const people = () => HttpService.get('/people/1/')

export default { people }