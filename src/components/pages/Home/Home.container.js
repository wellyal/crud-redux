import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getPeople } from 'reducers/people'
import { getFilms } from 'reducers/films'

import Home from './Home'

const mapStateToProps = ({ people, films }) => ({ people, films })

const mapDispatchToProps = dispatch => bindActionCreators({
  getPeople,
  getFilms
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)