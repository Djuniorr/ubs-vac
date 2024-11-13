// src/pages/Vacinas/styles.js
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;    
  background-color: #FFF;
  height: 100%;
`;

export const Menu = styled.div`
  display: grid;
  align-items: center;
  background-color: #657997;
  grid-template-columns: repeat(6, 1fr);
  height: 50px;
`;

export const ContentMenu = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: #FFF;
  background: #657997;
  font-size: 16px;
  border-right: 1px solid #FFF;
  text-transform: uppercase;

  &:last-child {
    border-right: none;
  }

  button{
    padding: 0;
    border-radius: unset;
    font-size: unset;
    max-width: unset;
    font-weight: unset;
    height: 100%;
  }
`;

export const MainContainer = styled.div`  
  padding: 10px;
  background: #eceff4;
  height: 100%;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;  
  background: #FFF;
  border-radius: 4px;
  padding: 20px;
`;

export const Title = styled.label`
  font-size: 18px;
  font-weight: 600;
  color: #2B2B2E;
  padding: 10px;
`;

export const TitleVacinas = styled.label`
  font-size: 26px;
  font-weight: bold;
  padding: 20px 0;
  text-align: center;
`;

export const VacinaItem = styled.div`
  margin-bottom: 20px;
  padding: 15px 30px;
  background-color: #f5f5f9;
  border-radius: 4px;
  box-shadow: 0px 0px 10px -5px;
  
  p {
    margin: 5px 0;
  }
`;

export const VacinasList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const BoxFilter = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const CleaningButton = styled.button`
  margin-left: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: #2B2B2E;
  font-weight: bold;
`;
