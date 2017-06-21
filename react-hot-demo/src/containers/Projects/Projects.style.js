import style from 'styled-components';
import {yellow} from '../../theme/variables';

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
      transform:translateY(-40%);
    }
`;
