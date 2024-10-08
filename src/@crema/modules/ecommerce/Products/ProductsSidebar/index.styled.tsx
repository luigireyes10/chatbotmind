import { Button, Tree } from "antd";
import { rgba } from "polished";
import styled from "styled-components";

export const StyledProductSideCheckedCell = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  & .ant-checkbox-wrapper {
    display: flex;
    margin-right: 16px;

    [dir="rtl"] & {
      margin-right: 0;
      margin-left: 16px;
    }
  }

  & .ant-checkbox {
    display: block;
    top: 0;
  }
`;

export const StyledProductSidebarColorCell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15px;
  height: 15px;
  border-radius: 0;
  cursor: pointer;
`;
export const StyledProductSidebarColorCellBtn = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15px;
  height: 15px;
  border-radius: 0;
  color: white;
  border: 0 none;
  box-shadow: none;
  font-size: 10px;
  background-color: transparent;
  padding: 5px;

  &:hover,
  &:focus {
    background-color: transparent;
  }

  & .anticon svg {
    display: block;
  }
`;

export const StyledProductSidebar = styled.div`
  padding: 24px;
  position: relative;
`;

export const StyledProductSidebarTitle = styled.h3`
  font-size: ${({ theme }) => theme.font.size.base};
  margin-bottom: 8px;
  font-weight: ${({ theme }) => theme.font.weight.medium};
`;

export const StyledProductSidebarItem = styled.div`
  position: relative;

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.palette.borderColor};
    padding-bottom: 16px;
    margin-bottom: 16px;
  }
`;
export const StyledProductSidebarItemTitle = styled.h5`
  font-size: ${({ theme }) => theme.font.size.base};
  color: ${({ theme }) => theme.palette.text.secondary};
  margin-bottom: 16px;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  text-transform: uppercase;
`;

export const StyledProductSidebarPriceSelector = styled.div`
  display: flex;
  justify-content: space-between;

  & span {
    font-weight: ${({ theme }) => theme.font.weight.medium};
  }
`;

export const StyledProductSidebarTree = styled(Tree)`
  display: flex;
  align-items: center;
  cursor: pointer;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  & .ant-checkbox-wrapper {
    display: flex;
    margin-right: 16px;

    [dir="rtl"] & {
      margin-right: 0;
      margin-left: 16px;
    }
  }

  & .ant-checkbox {
    display: block;
    top: 0;
  }
`;

export const StyledSidebarRatingCell = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.palette.text.secondary};

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  & .ant-checkbox-wrapper {
    display: flex;
    margin-right: 16px;

    [dir="rtl"] & {
      margin-right: 0;
      margin-left: 16px;
    }
  }

  & .ant-checkbox {
    display: block;
    top: 0;
  }
`;
