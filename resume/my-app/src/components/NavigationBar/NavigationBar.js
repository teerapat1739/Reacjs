import React, { Component } from 'react';
import { NavigationContainer,NavItem } from './NavigationBar.style';

class NavigationBar extends Component{
  render() {
    return (
      <NavigationContainer>
            <NavItem to="/">About Me</NavItem>
            <NavItem to="/projects">Contact && Follow</NavItem>
      </NavigationContainer>
    );
  }
}

export default NavigationBar;
