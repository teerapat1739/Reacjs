import styled from 'styled-components';
import { yellow } from  '../../theme/variables';
export const Background = styled.div`
    position :fixed;
    left: 10vw;
    width: 80vw;
    top: 10vh;
    height: 80vh;
    background-image: url(${require('../../assets/Bg.jpg')});
    background-color:${yellow};
    background-size:80%;
    background-repeat: no-repeat;
    background-position:center;
    z-index: -99;
`;
