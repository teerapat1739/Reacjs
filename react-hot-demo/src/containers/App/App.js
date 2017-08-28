import React, { Component } from 'react';
import { Background } from './App.style';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import ReallySmoothScroll from 'really-smooth-scroll';
import { hashHistory } from 'react-router';

hashHistory.listen(() => {
});

ReallySmoothScroll.shim();

class App extends Component {
  render() {
    return (
      <div>
    <NavigationBar/>
        {this.props.children}
    </div>
    );
  }
}

export default App;
