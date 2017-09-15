import React, { Component,PropTypes } from 'react';
import {
  Image,
  HeroImage,
  Content,
  RevealP,
  LinkItem,
  Title
 } from './AboutMe.style';
import {Container} from '../../theme/grid';
import WhenInView from '../../components/WhenInView/WhenInView';
import {images} from '../../assets/images';
import Gallery from 'react-grid-gallery';

export default class Home extends Component {
  static propTypes = {};

  render() {
    return (
      <Container>
        <HeroImage>
          <h1>Welcome To My Portfolio</h1>
          <h2>Mr.Teerpat Thong-o</h2>
        </HeroImage>
        {/*<Image src={require('../assets/hero.gif')} alt="hero-image"/>*/}
        <WhenInView>
          {({ isInView }) =>
            <RevealP hide={!isInView}>
             <h1><strong><i className="fa fa-user-circle" aria-hidden="true"></i> Name </strong>Teerapat Thong-o (Game)</h1>
                  <h3>Form Trang,Thailand</h3>

            </RevealP>
          }
        </WhenInView>
        <WhenInView>
          {({ isInView }) =>
            <RevealP hide={!isInView}>
            <h1><strong><i className="fa fa-graduation-cap" aria-hidden="true"></i> Education </strong></h1>
               <ul>
                  <li><h3>Went to Wichienmatu school,Science-Math</h3> </li>
                  <li><h3>Currently are Studying in Software Engineering of Engineering Program at Thammasat University</h3> </li>
               </ul>
            </RevealP>
          }
        </WhenInView>
        <WhenInView>
          {({ isInView }) =>
            <RevealP hide={!isInView}>
            <h1><strong><i className="fa fa-gamepad" aria-hidden="true"></i> EXPERIENCE (OUT OF CLASS) </strong></h1>
                <ul>
                    <li><h3>Attend the Robotics Competition of the Basic Education Commission. Finals of Thailand 2009</h3></li>
                    <li><h3>Join the aviation engineering camp 2010, National Science and Technology Capability </h3></li>
                    <li><h3>Attend the Robotics Competition of the Basic Education Commission. Southern tournament  of Thailand 2011</h3></li>
                    <li><h3>Join the Thailand’s Network Security Contest 2017 </h3></li>
                    <li><h3>Join the Mobile Enterprise d-Goverment Awards 2017 </h3></li>
                </ul>
            </RevealP>
          }
        </WhenInView>
        <WhenInView>
          {({ isInView }) =>
            <RevealP hide={!isInView}>
            <h1><strong><i className="fa fa-trophy" aria-hidden="true"></i> AWARD </strong></h1>
                <ul>
                    <li><h3>Excellent award of world robot championship (WRO Thailand) 2009</h3></li>
                    <li><h3>Second runner-up robot competition of the Basic Education Commission. 2010</h3></li>
                    <li><h3>Second runner-up robot competition of southern tournament world robot championship (WRO Thailand) 2010</h3></li>
                    <li><h3>Winner of  the Basic Education Commission. Southern tournament  of Thailand 2013</h3></li>
                </ul>
            </RevealP>
          }
        </WhenInView>
        <WhenInView>
        {({ isInView }) =>
          <RevealP hide={!isInView}>
          <h1><strong><i  className="fa fa-sitemap" aria-hidden="true"></i> Skill </strong></h1>
              <ul>
                  <li><h2><strong>Programming Languages </strong> : css,html,javascript,java,c,c++,sql,phyton,php,swift</h2></li>
                  <li><h2><strong>FrameWork </strong> : Laravel,React js,Angular js</h2></li>
              </ul>
          </RevealP>
        }
      </WhenInView>
      <div>
        <br/>
        <br/>
        <br/>
            <Content>
                <h1> Gallery</h1>
            </Content>
            <br/>
            <br/>
             <Gallery images={images}/>
      </div>
      <br/>
        <br/>
        <br/>
          <div>
                <h1>_____</h1>
            <br/>
            <br/>
            <br/>
            <br/>
            <ul> <Content><h1>Follow Me</h1></Content>
                <li>
                  <Title><strong> <i className="fa fa-github" aria-hidden="true"></i> <LinkItem href="https://github.com/teerapat2539">  Github</LinkItem> </strong></Title>
               </li>
               <li>            
                 <Title><strong>   <i className="fa fa-medium" aria-hidden="true"></i> <LinkItem href="https://medium.com/@teerapatthongo/%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%99-code-%E0%B8%AA%E0%B8%9A%E0%B8%B2%E0%B8%A2%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2-design-pattern-%E0%B8%95%E0%B8%AD%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88-1-observer-5d370f5142c">  Meduim</LinkItem> </strong></Title>
              </li>
              <li>  
                <Title><strong>   <i className="fa fa-linkedin" aria-hidden="true"></i> <LinkItem href="https://www.linkedin.com/in/teerapat-thong-o-85a849116/">  Linkin</LinkItem> </strong></Title>
              </li>
              <li>
              <Title><strong>    <i className="fa fa-facebook " aria-hidden="true"></i> <LinkItem href="https://www.facebook.com/teerapat.thongo">  Facebook</LinkItem> </strong></Title>

              </li>
            </ul>
          </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </Container>
    );
  }
}
