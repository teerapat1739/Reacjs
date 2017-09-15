import React, { Component } from 'react';
import ReallySmoothScroll from 'really-smooth-scroll';
import { hashHistory } from 'react-router';

hashHistory.listen(() => {
});

ReallySmoothScroll.shim();

class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
    </div>
    );
  }
}

export default App;
