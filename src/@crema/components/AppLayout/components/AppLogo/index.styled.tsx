import styled from 'styled-components';

export const StyledAppLogo = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  align-items: center;

  & img {
    height: 40;
    
    [dir='rtl'] & {
      margin-right: 0;
      margin-left: 10px;
    }
  }
`;