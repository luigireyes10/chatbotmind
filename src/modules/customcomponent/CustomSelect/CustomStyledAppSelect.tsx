import { Select } from 'antd';
import styled from 'styled-components';

const { Option } = Select;

export const CustomStyledAppSelect = styled(Select)`
border-radius: 50%;
  margin-left: 8px;
  cursor: pointer;
  min-width: 100px;
  margin-right: -20px;
  height: 44px;
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
  font-size: ${({ theme }) => theme.font.size.base};

  color: ${({ theme }) => theme.palette.text.primary};
  background: ${({ theme }) => theme.palette.background.paper};

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: 8px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.xxl}px) {
    margin-left: 24px;

    [dir='rtl'] & {
      margin-left: 0;
      margin-right: 24px;
    }
  }

  &.ant-select:not(.ant-select-customize-input) .ant-select-selector {
    height: 44px;
    background-color: #EEEEEE;
  }

  &.ant-select-single:not(.ant-select-customize-input)
    .ant-select-selector
    .ant-select-selection-search-input {
    height: 28px;
    color: ${({ theme }) => theme.palette.text.primary};
  }

  &.ant-select-single .ant-select-selector .ant-select-selection-item,
  .ant-select-single .ant-select-selector .ant-select-selection-placeholder {
    line-height: 28px;
    color: ${({ theme }) => theme.palette.text.primary};
  }
`;

export const StyledOption = styled(Option)`
  cursor: pointer;
  padding: 8px;
  font-size: ${({ theme }) => theme.font.size.base};
`;
