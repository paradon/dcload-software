import React, { Component } from 'react';
import DcLoad from './components/dcload';
import CsvLog from './components/csvlog';
import SerialPort from './components/serialport';
import logo from './logo.svg';

// components

// styles
import cssStyles from './App.module.css';

class App extends Component {
  render() {
    return (
      <div className={ cssStyles.app }>
        <div className={ cssStyles.header }>
          <img src={ logo } className={ cssStyles.logo } alt='logo' />
          <h2 className={ cssStyles.title }>
            Electronic DC Load
          </h2>
          <div className={ cssStyles.subtitle }>
            allow custom config for create-react-app without ejecting
          </div>
        </div>

        <div className={ cssStyles.description }>
          <SerialPort />
          <DcLoad />
          <CsvLog />
        </div>
      </div>
    );
  }
}

export default App;
