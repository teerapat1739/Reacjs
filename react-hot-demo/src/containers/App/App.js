import React, { Component } from 'react';
import { Background } from './App.style';

class App extends Component {
  render() {
    return (
    <Background>
        {this.props.children}
    </Background>
    );
  }
}

export default App;
