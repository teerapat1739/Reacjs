import React, { Component } from 'react';
import Zoomy from 'react-zoomy';
import {
        ImageButton,
        Index,
} from './Projects.style';
import { Container, Relative,Flex } from '../../theme/grid';
import {A} from '../../theme/types';


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
                  <img src={require('../../assets/Jump_resize.jpg')} alt="Jump"/>
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
      </Container>
    );
  }
}

export default Projects;


//yarn add react-zoomy
//yarn add react-motion
