import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Contacts from './Contacts';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {open: true};
  }

  handleToggle = () => this.setState({open: !this.state.open});
  
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
            <div>
              <RaisedButton
                label="Toggle Drawer"
                onClick={this.handleToggle}
              />
          </div>
            <Contacts/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
