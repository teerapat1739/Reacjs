import styled, {css} from 'styled-components';

export const Container = styled.div`
    padding-left:120px;
    padding-right:120px;
    padding-top:30px;
`;
export const Relative = styled.div`
    position:relative;
`;

export const Flex = styled.div`
    display:flex;

    ${({ column }) => column && css`
    flex-direction: column;
  `}
  ${({ justify }) => justify && css`
    justify-content: ${justify};
  `}
  ${({ align }) => align && css`
    align-content: ${align};
  `}
`;
