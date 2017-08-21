import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getPeople } from 'reducers/people'

import Home from './Home'

const mapStateToProps = ({ people }) => ({ people })

const mapDispatchToProps = dispatch => bindActionCreators({ getPeople }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)