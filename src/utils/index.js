const parseUri = endpointList => {
  if(!endpointList.length) {
    console.error('parseUri function only accept array as parameter')
    return null
  }
  return endpointList.map(endpoint => endpoint.substr(endpoint.indexOf("api/") + 3))
}

export { parseUri }