import styled, {css} from 'styled-components';
import {yellow,red,blue} from '../../theme/variables';
import { Link } from 'react-router';

export const Image = styled.img`
  width: 100%;
`;

export const HeroImage = styled.div`
  height: 100vh;
  background-image: url('${require('../../assets/Hero.jpg')}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  text-align: center;
  color: white;
  font-size: 2em;
  h1 {
    margin-bottom: 0;
  }
`;

export const RevealP = styled.p`
  position: relative;
  &:after {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    transform-origin: left;
    transform: rotateY(90deg);
    transition: transform 1s;
  }
  ${({ hide }) => hide && css`
    &:after {
      transform: rotateY(0deg);
    }
  `}
`;
export const Content = styled.div`


    h1{
      text-align:center;
      font-size :3em;
      margin: 0;
      font-weight: bold;
      background-color: ${yellow};
      opacity:0.8;
      transform:translateY(-20%);
    }
`;
export const Title = styled.h1`
color: ${red};
font-weight: bold;
`;
export const LinkItem = styled(Link)`
  margin-right:30px;
  font-size:1.5em;
  cursor:pointer;
  position:relative;
text-decoration: none;
  color: ${blue};
  &:hover {
    color:${yellow};
    &:after{
      content: '';
      position: absolute;
      left:0;
      top:0;
      width: 100%;
      height: 100%;
      background-color: ${red};
      z-index: -1;
      transform:scale(1.3,1.0);//(..,height)
    }
  }
`;
