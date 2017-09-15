import style from 'styled-components';
import { Flex } from '../../theme/grid';
import {blue,yellow,red} from '../../theme/variables';
import { Link } from 'react-router';

export const NavigationContainer = style(Flex)`
    position:fixed;
    right:2em;
    top:1.8em;
`;

export const NavItem = style(Link)`
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
