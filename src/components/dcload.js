import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as dcloadActions from '../actions/dcload';

class DcLoad extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <section>
        <p>State={ this.props.loadState ? 'ON' : 'OFF' }</p>
        <button onClick={ this.props.actions.switchLoadOn } >On</button>
        <button onClick={ this.props.actions.switchLoadOff } >Off</button>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  loadState: state.dcload.load,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(dcloadActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(DcLoad);
