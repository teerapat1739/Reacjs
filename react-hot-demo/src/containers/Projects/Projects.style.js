import style from 'styled-components';
import {yellow,red} from '../../theme/variables';

export const ImageButton = style.div`
    cursor:pointer;
    overflow:hidden;
    display: inline-block;
    & > img{
      transition: transform.3s;
    }
    &:hover{
        & > img {
          transform: scale(1.3);
        }
    }
`;

export const Index = style.div`
    position: absolute;
    left:0;
    bottom:0;
    z-index: -1;
    h1{
      font-size :3em;
      margin: 0;
      font-weight: bold;
      background-color: ${yellow};
      opacity:0.8;
      transform:translateY(-20%);
    }
`;

export const ImageContainer =  style.div`
    width: 1000px;
    margin-left:auto;
    margin-right:auto;
`;

export const Title = style.h1`
  color: ${red};
  font-weight: bold;
`;
