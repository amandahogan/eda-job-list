import { connect } from 'react-redux'

import { hideDetails } from '../../actions/details'
import Details from '../../components/Details'

export default connect(
  state => {
    return {
      open: state.details !== null
    }
  },
  dispatch => {
    return {
      close: () => dispatch(hideDetails())
    }
  }
)(Details)
