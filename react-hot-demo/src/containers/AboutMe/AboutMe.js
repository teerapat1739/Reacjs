import React, { Component,PropTypes } from 'react';
import {
  Image,
  HeroImage,
  RevealP
 } from './AboutMe.style';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import {Container} from '../../theme/grid';
import WhenInView from '../../components/WhenInView/WhenInView';

export default class Home extends Component {
  static propTypes = {};

  render() {
    return (
      <Container>
      <NavigationBar/>
        <HeroImage>
          <h1>Welcome To My Portfolio</h1>
          <h2>Mr.Teerpat Thong-o</h2>
        </HeroImage>
        {/*<Image src={require('../assets/hero.gif')} alt="hero-image"/>*/}
        <WhenInView>
          {({ isInView }) =>
            <RevealP hide={!isInView}>
             <h1><strong>Name </strong>Teerapat Thong-o (Game)</h1>
                  <h3>Form Trang,Thailand</h3>
            </RevealP>
          }
        </WhenInView>
        <WhenInView>
          {({ isInView }) =>
            <RevealP hide={!isInView}>
            <h1><strong>Education </strong></h1>
               <ul>
                  <li><h3><strong> High School: </strong> Wichienmatu school</h3> </li>
                  <li><h3>Currently are Studying in Software Engineering of Engineering Program at Thammasat University</h3> </li>
               </ul>
            </RevealP>
          }
        </WhenInView>
        <WhenInView>
          {({ isInView }) =>
            <RevealP hide={!isInView}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in velit dolor. In et dolor non sapien ultricies hendrerit. Maecenas ultricies porttitor est, sit amet eleifend sem egestas ut. Cras eget imperdiet est. Cras viverra ligula urna, eget rutrum erat lacinia nec. Praesent nec libero accumsan turpis molestie dapibus. Mauris scelerisque ligula sed felis ultricies, ut efficitur orci dignissim. Nam eleifend ligula sit amet congue dapibus. Vestibulum ut nisi vel quam luctus mollis vel ac mi. Vivamus pellentesque finibus sapien quis convallis. Donec at interdum mi. Sed finibus sed justo ac malesuada. Aliquam pulvinar pellentesque lacinia. Integer commodo blandit quam, ut blandit quam pretium eget.
            </RevealP>
          }
        </WhenInView>
      </Container>
    );
  }
}
