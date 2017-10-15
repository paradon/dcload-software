import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as csvlogActions from '../actions/csvlog';

class CsvLog extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <section>
        <p>Logging={ this.props.logfile }</p>
        <button onClick={ this.props.actions.selectLogfile } >Set CSV File</button>
        <button onClick={ this.props.actions.closeLogfile } >Close File</button>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  logfile: state.csvlog.logfile,
  isLogging: state.csvlog.isLogging,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(csvlogActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CsvLog);
