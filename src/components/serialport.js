import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getSerialportLoadingState, getSerialportList } from '../reducers';
import { listSerialports } from '../actions/serialdriver';

class SerialPort extends Component {
  static propTypes = {
    listSerialports: PropTypes.func.isRequired,
    portlist: PropTypes.func.isRequired,
    loading: PropTypes.func.isRequired,
  };

  state = {
  };

  render() {
    return (
      <section>
        <select>
          { this.props.portlist.map(item => <option value={ item }>{ item }</option>) }
        </select>
        <button onClick={ this.props.listSerialports } disabled={ this.props.loading }>
          <span role='img' aria-label='Reload'>🔃</span>
        </button>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  portlist: getSerialportList(state),
  loading: getSerialportLoadingState(state),
});

export default connect(
  mapStateToProps,
  {
    listSerialports,
  },
)(SerialPort);
