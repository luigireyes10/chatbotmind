import { Table, Checkbox } from 'antd';
import { rgba } from 'polished';
import styled from 'styled-components';
import { Avatar } from 'antd';

export const StyledCheckbox = styled(Checkbox)`
  // Personaliza el estilo del checkbox para que sea más oscuro
  &.ant-checkbox-wrapper {
    .ant-checkbox-inner {
      // Cambia el color del borde del checkbox cuando está desactivado
      border-color: #3f3f3f;
      background-color: ${({ checked }) => checked ? 'darkorange' : 'transparent'};
    }
  }
`;

export const StyledCartTable = styled(Table)`
  & .ant-table {
    min-height: 0.1%;
    overflow-x: auto;
    .ant-table-tbody > tr > td {
      height: 210px; // Establece la altura de las filas
    }
  }

  & .ant-table-thead > tr > th {
    font-size: 13px;
    padding: 8px;
    background-color: ${({ title }) => title ? rgba(0, 0, 0, 0.05) : 'transparent'};
    font-weight: ${({ theme }) => theme.font.weight.bold};

    &:first-child {
      text-align: left;
      padding-left: 20px;

      [dir='rtl'] & {
        text-align: right;
        padding-left: 0;
        padding-right: 20px;
      }
    }

    &:last-child {
      padding-right: 20px;

      [dir='rtl'] & {
        padding-right: 0;
        padding-left: 20px;
      }
    }

    &[colspan='5'] {
      padding: 0;
    }
  }

  & .ant-table-tbody > tr.ant-table-row {
    &:hover td {
      background-color: transparent;
    }
  }

  & .ant-table-tbody > tr > td {
    font-size: 13px;
    padding: 8px;

    &:first-child {
      text-align: left;
      padding-left: 20px;

      [dir='rtl'] & {
        text-align: right;
        padding-left: 0;
        padding-right: 20px;
      }
    }

    &:last-child {
      padding-right: 20px;

      [dir='rtl'] & {
        padding-right: 0;
        padding-left: 20px;
      }
    }
  }

  & tbody > tr {
    transition: all 0.2s ease;
    transform: scale(1);
  }

  & .ant-table-tbody > tr.ant-table-row:hover > td {
    background-color: transparent;
  }
`;

export const StyledCartUser = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledCartUserInfo = styled.div`
  margin-left: 12px;

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: 12px;
  }

  & h3 {
    font-size: ${({ theme }) => theme.font.size.base};
    font-weight: ${({ theme }) => theme.font.weight.medium};
    margin-bottom: 0;
  }

  & p {
    color: ${({ theme }) => theme.palette.text.secondary};
    margin-bottom: 0;
  }
`;

export const StyledCartIncDec = styled.div`
  border: 1px solid ${({ theme }) => theme.palette.borderColor};
  border-radius: ${({ theme }) => theme.sizes.borderRadius.base};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 40px;

  & span {
    padding-left: 12px;
    padding-right: 12px;
  }
`;

export const StyledDescriptionAndQty = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CartTableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
`;
