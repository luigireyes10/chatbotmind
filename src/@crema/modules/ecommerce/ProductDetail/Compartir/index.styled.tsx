import styled from 'styled-components';

export const StyledCartsFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-top: 1px solid #e5e4e6;
  height: 90px;
  width: 100%;
  padding-left: 40px;
  padding-right: 40px;
  
`;

export const StyledCompartirCopiaR = styled.div`

position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  padding-right: 80px;
  top: 100px;
`
export const StyledContentIcons = styled.button`
  border: none;
  outline: none;
  background: transparent;

  cursor: pointer;
  margin-top: -15px;
`;



export const StyledButtonCopiar = styled.button`
border: none;
outline: none;
background: transparent;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border: 1px solid #ccc; padding: 8px;
  border-radius: 10px; 
  margin-top: 20px;
`;

export const StyledInput = styled.input`
  flex: 1;
  margin-right: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  height: 10px;
  border: none;
`;

export const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: #1890ff;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  width: 70px;
  height: 35px;
  padding:0;

`;
