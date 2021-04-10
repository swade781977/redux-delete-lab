import React, { Component } from 'react'
import BandInput from './BandInput';
import Bands from './Bands';

import { connect } from 'react-redux'



class BandsContainer extends Component {
  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        {console.log(this.props.bands)}
        <Bands bands={this.props.bands} delete={this.props.delete} />

      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name }),
  delete: band => dispatch({type: "DELETE_BAND", band})
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
