import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

export const ContentPrimario = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;  
  border-radius: 15px;
  max-width: 90%;
  max-height: 90%;

  @media (min-width: 500px){
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 0px 10px;
    background-color: #ced7eb;
    padding: 40px;
  }

  @media (min-width: 980px){
    flex-direction: row;
  }
`;

export const ContentCabecalho = styled.div`
gap: 20px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 100%;
`;

export const ContentDados = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 10px 5px;  
  background-color: #ffffff;
  padding: 40px;
  border-radius: 15px;

  @media (min-width: 980px){
    width: 650px;
  }
`;

export const Label = styled.label`
  font-size: 50px;  
  color: white;
  font-weight: 600;

  @media (min-width: 500px){
    color: #657997;
  }
`;

export const LabelWelcome = styled.label`  
  color: white;
  font-size: 14px;
  font-weight: 600;

  @media (min-width: 500px){
    color: #657997;
  }
`;

export const LabelSignup = styled.label`
  font-size: 16px;
  color: #676767;
`;

export const LabelError = styled.label`
  font-size: 14px;
  color: red;
`;

export const Strong = styled.strong`
  cursor: pointer;

  a {
    text-decoration: none;
    color: #323235;
  }
`;
