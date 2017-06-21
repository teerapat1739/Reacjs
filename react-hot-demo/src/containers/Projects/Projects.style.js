import style from 'styled-components';
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
