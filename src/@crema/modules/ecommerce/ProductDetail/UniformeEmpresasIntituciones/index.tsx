import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd'; 
import { useRouter } from 'next/router';
import IntlMessages from '@crema/helpers/IntlMessages';


const empresaImage = '/assets/images/uniformesempresa/Uniformes-empresariales.png';

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
`;

const Image = styled.img`
  width: 50%;
  height: auto;
  margin-right: 20px;
`;

const TextContainer = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  margin-bottom: 10px;
  font-size: 24px;
  color: #333;
`;

const Description = styled.p`
  font-size: 16px;
  color: #666;
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
`;

const StyledButton = styled.button`
  background-color: #ff9c1b;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  display: inline-block;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e76c19;
  }
`;



const UniformeEmpresasInstituciones: React.FC = () => {
  const router = useRouter();

  return (
    <Container>
      <Image src={empresaImage} alt="Empresa" />
      <TextContainer>
        <Title>Uniformes para Empresas e Instituciones</Title>
        <Description>
          Ofrecemos una amplia variedad de uniformes de alta calidad para empresas e instituciones.
          Nuestros productos están diseñados para proporcionar comodidad y durabilidad, garantizando
          que sus usuarios se vean profesionales y se sientan cómodos durante todo el día.
        </Description>
        <ButtonContainer>
          <StyledButton onClick={() => { router.push("/ecommerce/desing"); }}>
            <IntlMessages id="Ordena Ahora" />
          </StyledButton>
        </ButtonContainer>
      </TextContainer>
    </Container>
  );
};

export default UniformeEmpresasInstituciones;