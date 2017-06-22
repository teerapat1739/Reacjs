import React, { Component } from 'react';
import Zoomy from 'react-zoomy';
import {
        ImageButton,
        Index,
        ImageContainer,
} from './Projects.style';
import { Container, Relative,Flex } from '../../theme/grid';
import {A} from '../../theme/types';
import ParallaxImage from 'react-image-parallax2';

class Projects extends Component {
  render() {
    return(
      <Container>
        <Relative>
          <Index>
              <h1>01</h1>
          </Index>
          <h1>npm install --save <A>react-zoomy</A></h1>
        </Relative>
        <Flex justify={'center'}>
        <Zoomy
          imageUrl={require('../../assets/Jump.jpg')}
            renderThumbnail={({ showImage }) =>
            <ImageButton onClick={showImage}>
                  <img src={require('../../assets/Jump_resize2.jpg')} alt="Jump"/>
            </ImageButton>
                }
            scale={[1.1, 1.1]}
            imageProps={{
              style: {
                width: '100vw',
                height: 'auto'
              }
            }}
            />
        </Flex>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Relative>
          <Index>
              <h1>02</h1>
          </Index>
          <h1>npm install --save <A>react-image-parallax2</A></h1>
        </Relative>
        <ImageContainer>
          <ParallaxImage
            reeduceHeight={1/3}
            src={require('../../assets/Jump.jpg')} />
        </ImageContainer>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </Container>
    );
  }
}

export default Projects;


//yarn add react-zoomy
//yarn add react-motion
