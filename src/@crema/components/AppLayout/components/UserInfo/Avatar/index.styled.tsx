import styled from 'styled-components';
import {Avatar, List} from 'antd';
import {darken} from 'polished';


export const StyledCrUserInfoAvatar = styled(Avatar)`
  font-size: 24px;
  background-color: ${({theme}) => theme.palette.orange[6]};
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;