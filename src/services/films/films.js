import HttpService from 'services/HttpService'

const films = (films) => {
  const filmList = films.payload.map( request => HttpService.get(request) )
  return Promise.all(filmList).then(values => values)
}

export default { films }
