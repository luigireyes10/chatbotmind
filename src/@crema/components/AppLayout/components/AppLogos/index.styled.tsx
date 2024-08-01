import styled from 'styled-components';

export const StyledAppSocialLogos = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  align-items: center;

  & img {
    height: 24px;
    margin-right: 10px;

    [dir='rtl'] & {
      margin-right: 0;
      margin-left: 10px;
    }
  }
`;
